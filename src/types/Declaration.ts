import type { Company } from "./Company";
import type { Profile } from "./Profiles";

export type Declaration = {
  company: Company;
  firstParent: Profile;
  seconParent: Profile;
  registered: string;
  id: string | number;
  status: string;
  picture: string;
  comment: string;
  child: Profile;
};
