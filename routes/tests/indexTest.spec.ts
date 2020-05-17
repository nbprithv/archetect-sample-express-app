import 'mocha';
import {expect} from "chai";
import * as httpMocks from "node-mocks-http";
import indexRouter from "../src/index";


describe('Route tests', function () {
    it("GET /", function () {
        const mockRequest = httpMocks.createRequest({
            method: "GET",
            url: "/"
        });
        const mockResponse = httpMocks.createResponse();

        indexRouter(mockRequest, mockResponse);

        const actualResponseBody = mockResponse._getData();
        const expectedResponseBody = { id: 1, name: 'foo', email: 'bar' };
        expect(actualResponseBody).to.eql(expectedResponseBody);
    });
});