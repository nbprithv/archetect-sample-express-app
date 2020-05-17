import express from 'express';
import indexRouter from "./routes/src";

// Create a new express application instance
const app: express.Application = express();

app.use('/', indexRouter);

// error handler
app.use(function(err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});