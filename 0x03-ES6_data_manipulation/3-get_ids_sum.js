function getStudentIdsSum(studentArray) {
  const sumId = studentArray.map((student) => student.id);
  const sum = sumId.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
export default getStudentIdsSum;
