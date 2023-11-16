enum AchievementLevel {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

const getAchivementLevel = (score: number) => {
  switch (true) {
    case score >= 90:
      return AchievementLevel.A;
    case score >= 80:
      return AchievementLevel.B;
    case score >= 70:
      return AchievementLevel.C;
    case score >= 60:
      return AchievementLevel.D;
    default:
      return AchievementLevel.E;
  }
};

export default getAchivementLevel;
