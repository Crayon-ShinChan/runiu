export type DistributionData = {
  data: (
    | {
        id: string;
        values: {
          start: number;
          end: number;
          value: number;
        }[];
      }
    | {
        id: string;
        values: {
          date: string | null;
        }[];
      }
  )[];
};
