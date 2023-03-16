type categories =
  | "hipertension"
  | "smoking"
  | "sedentarismo"
  | "obesity"
  | "dyslipidemia"
  | "saos"
  | "diabetes"
  | "atherosclerosis"
  | "fibrilaiton"
  | "age"
  | "ethnicity"
  | "gender";

export interface GenericQuestionProps {
  lottie: any;
  question: string;
  answerForRecomendation?: "yes" | "no";
  recomendation?: string;
  answer: "yes" | "no" | "awaiting";
  category: categories;
}

export interface props {
  questionsList: GenericQuestionProps[];
}
