/*
 * Secara default, paramter di function adalah optional
 * Jika tidak ada value yang dikirim mke parameter, maka secara otomatis akan berniali undefined
 */

function fullName(firstName, middleName, lastName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
fullName("Fairuz"); 
// middleName dan lastName akan berisikan undefined
