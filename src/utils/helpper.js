export const getAverageGrade = grades =>
    grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) / grades.length;