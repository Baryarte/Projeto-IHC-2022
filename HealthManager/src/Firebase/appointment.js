import { getDatabase, ref, onValue, set, push } from "firebase/database";

function storeAppointment(
  title,
  date,
  hour,
  specialty,
  address,
  notes,
  userId = 1
) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId + "/appointments");
  console.log(title, date, hour, specialty, address, notes);
  push(reference, {
    title: title,
    date: date,
    hour: hour,
    specialty: specialty,
    address: address,
    notes: notes,
  });
}

function deleteAppointment(id) {
  const db = getDatabase();
  const reference = ref(db, "appointments/" + id);
  set(reference, null);
}

export { storeAppointment, deleteAppointment };
