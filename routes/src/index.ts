import {getUserImpl} from "../../impl/src/UserService";


const indexRouter = function(req: any, res: any) {
  res.send(getUserImpl(1));
};

export default indexRouter;
