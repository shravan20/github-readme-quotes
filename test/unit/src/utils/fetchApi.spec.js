const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const fetch = require('node-fetch');
const fetchApi = require('../../../../src/utils/fetchApi');

describe('utils function fetchApi()', function(){


    context('Test Suites for #fetchApi()',  function() {

        let stub =sinon.stub;

        afterEach(function(){
            sinon.restore();
        });

        it('a) it should return an success response upon successfully calling the fetch function', async function() {

            let url = "https://www.quotepub.com/api/widget/?type=qotd_t";
            let options = {};
            let response = {
                "quote_body":"I try to stay away from all the blogs and messages boards.",
                "quote_author":"Joanne Kelly",
                "quote_vendor":"https:\/\/www.quotepub.com\/"
            };


            fetchApi(url, options).then(res => res.json())
                                  .then(res => {
                                    sinon.assert.equal(res, response);
                                    expect(res).to.be.equal(response);
                                  })

        });


        it('a) it should throw an error response upon failure from calling the url using fetch function API', async function() {

            let url = "https://www.quotepub.com/api/widget/?type=qotd_t";
            let options = {};
            let response = {
                "quote_body":"I try to stay away from all the blogs and messages boards.",
                "quote_author":"Joanne Kelly",
                "quote_vendor":"https:\/\/www.quotepub.com\/"
            };

            fetchApi(url, options).then( res => { 
                                    throw new Error();
                                  })
                                  .then(res => {
                                    sinon.assert.equal(res, response);
                                    expect(res).to.be.equal(response);
                                  })
                                  .catch(err => {
                                    sinon.assert.isDefined(err);
                                  });

        });

    })
})