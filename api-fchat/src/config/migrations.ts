import { User } from "../app/models/user"
import { TokenBlackList } from "../app/models/tokenblacklist"

(async () => {
	await User.sync({ alter: true });
	await TokenBlackList.sync({ alter: true });
})();
