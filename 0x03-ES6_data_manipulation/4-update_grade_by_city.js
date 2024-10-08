function updateStudentGradeByCity(studentArray, city, newGrades) {
  const studentsCity = studentArray.filter((student) => student.location === city);
  const updatedStudents = studentsCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });

  return updatedStudents;
}
export default updateStudentGradeByCity;
