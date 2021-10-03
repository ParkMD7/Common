import { ConstructivePopcottGoalActions, DestructivePopcottGoalActions } from './popcott-goal-action';
import { ConstructivePopcottGoalEntities, DestructivePopcottGoalEntities } from './popcott-goal-entity';
import { PopcottGoalOutcomes } from './popcott-goal-outcome';

export interface GoalObjective {
    PopcottGoalAction: ConstructivePopcottGoalActions | DestructivePopcottGoalActions,
    PopcottGoalEntity: ConstructivePopcottGoalEntities | DestructivePopcottGoalEntities,
    PopcottGoalOutcome: PopcottGoalOutcomes,
};
