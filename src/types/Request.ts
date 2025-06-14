import type { Company } from "./Company";
import type { Profile } from "./Profiles";

export type Request = {
  company: Company;
  parent: Profile;
  registered: string;
  id: string | number;
  picture: string;
  comment: string;
  child: Profile;
};
