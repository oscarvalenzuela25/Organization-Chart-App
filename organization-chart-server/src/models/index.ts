import { Division } from './Division';
import { Job } from './Job';
import { Tier } from './Tier';
import { User } from './User';
import { UserJob } from './UserJob';
import { JobRelations } from './JobRelations';
import { sequelize } from '../config/sequelize';

Tier.initialize(sequelize);
Division.initialize(sequelize);
User.initialize(sequelize);
Job.initialize(sequelize);
UserJob.initialize(sequelize);
JobRelations.initialize(sequelize);

Tier.associate();
Division.associate();
User.associate();
Job.associate();
UserJob.associate();
JobRelations.associate();

export { Division, Job, Tier, User, UserJob, JobRelations };
