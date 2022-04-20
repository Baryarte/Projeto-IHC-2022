import { getDatabase, ref, onValue, set, push } from "firebase/database";

function storeMedicine(
  name,
  hour,
  dose,
  days,
  expiration,
  end,
  quantity,
  observation,
  userId = 1
) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId + "/medicines");
  console.log(days);
  push(reference, {
    name: name,
    dose: dose,
    hour: hour,
    days: days,
    quantity: quantity,
    expiration: expiration,
    end: end,
    observation: observation,
  });
}

export { storeMedicine };
