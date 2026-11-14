import borrowings from "../data/borrowings.js";
import borrowingItems from "../data/borrowingItems.js";
import equipment from "../data/equipment.js";
import equipmentUnits from "../data/equipmentUnits.js";
import users from "../data/users.js";

const activeStatuses = new Set(["Pending", "Approved", "Borrowed", "Overdue"]);

export function getBorrowerGroups() {
  const groups = new Map();
  const seenUnitsByBorrower = new Map();
  const seenBorrowings = new Set();

  for (const borrowing of borrowings) {
    if (seenBorrowings.has(borrowing.id)) continue;
    seenBorrowings.add(borrowing.id);

    const user = users.find((item) => item.id === borrowing.userId);
    let group = groups.get(borrowing.userId);

    if (!group) {
      group = {
        userId: borrowing.userId,
        borrower: user?.name ?? "Unknown",
        borrowings: [],
        activeEquipmentCount: 0,
      };
      groups.set(borrowing.userId, group);
    }

    let seenUnits = seenUnitsByBorrower.get(borrowing.userId);
    if (!seenUnits) {
      seenUnits = new Set();
      seenUnitsByBorrower.set(borrowing.userId, seenUnits);
    }

    group.borrowings.push(borrowing);

    if (activeStatuses.has(borrowing.status)) {
      for (const item of borrowingItems) {
        const unitExists = equipmentUnits.some((unit) => unit.id === item.unitId);
        if (
          item.borrowingId === borrowing.id &&
          unitExists &&
          !seenUnits.has(item.unitId)
        ) {
          seenUnits.add(item.unitId);
          group.activeEquipmentCount += 1;
        }
      }
    }
  }

  return [...groups.values()];
}

export function getBorrowerHistory(userId) {
  const seenBorrowings = new Set();

  return borrowings
    .filter((borrowing) => borrowing.userId === userId)
    .filter((borrowing) => {
      if (seenBorrowings.has(borrowing.id)) return false;
      seenBorrowings.add(borrowing.id);
      return true;
    })
    .flatMap((borrowing) => {
      const items = borrowingItems.filter(
        (item) => item.borrowingId === borrowing.id,
      );
      const borrowingItemsToShow = items.length ? items : [null];

      return borrowingItemsToShow.map((borrowingItem) => {
        const unit = equipmentUnits.find(
          (item) => item.id === borrowingItem?.unitId,
        );
        const equipmentItem = equipment.find(
          (item) => item.id === unit?.equipmentId,
        );

        return {
          id: borrowingItem?.id ?? borrowing.id,
          borrowingId: borrowing.id,
          equipmentName: equipmentItem?.name ?? "Unknown",
          unitId: unit?.id ?? borrowingItem?.unitId ?? "Unknown",
          borrowDate: borrowing.borrowDate ?? "—",
          dueDate: borrowing.dueDate ?? "—",
          status: borrowing.status,
        };
      });
    });
}
