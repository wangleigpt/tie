// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Factory for creating new frontend instances of CodeEvalResult
 * domain objects.
 */

tie.factory('CodeEvalResultObjectFactory', [
  function() {
    /**
     * CodeEvalResult stores all of the results for each test and any related
     * errors associated with a given code submission.
     */

    /**
     * Constructor for CodeEvalResult
     *
     * @param {string} preprocessedCode Unprocessed student code
     * @param {string} output Output of student code
     * @param {Array} correctnessTestResults Results of Correctness tests
     * @param {Array} buggyOutputTestResults Results of Buggy Output tests
     * @param {Array} performanceTestResults Results of Performance tests
     * @param {ErrorTraceback} errorTraceback Traceback of error (if there is
     *    one)
     * @param {string} errorInput Input that caused error (if there is one)
     * @constructor
     */
    var CodeEvalResult = function(
        preprocessedCode, output, correctnessTestResults,
        buggyOutputTestResults, performanceTestResults, errorTraceback,
        errorInput) {
      /**
       * @type {string}
       * @private
       */
      this._preprocessedCode = preprocessedCode;

      /**
       * @type {string}
       * @private
       */
      this._output = output;

      /**
       * @type {Array}
       * @private
       */
      this._correctnessTestResults = correctnessTestResults;

      /**
       * @type {Array}
       * @private
       */
      this._buggyOutputTestResults = buggyOutputTestResults;

      /**
       * @type {Array}
       * @private
       */
      this._performanceTestResults = performanceTestResults;

      /**
       * @type {ErrorTraceback}
       * @private
       */
      this._errorTraceback = errorTraceback;

      /**
       * @type {string}
       * @private
       */
      this._errorInput = errorInput;
    };

    // Instance methods.

    /**
     * A getter for the _preprocessedCode property.
     * It should return a string with code that has already been preprocessed.
     *
     * @returns {string}
     */
    CodeEvalResult.prototype.getPreprocessedCode = function() {
      return this._preprocessedCode;
    };

    /**
     * Returns a boolean indicating whether the preprocessed code in this
     * object matches the preprocessed code in the given CodeEvalResult.
     *
     * @param {CodeEvalResult} otherCodeEvalResult
     *
     * @returns {boolean}
     */
    CodeEvalResult.prototype.hasSamePreprocessedCodeAs = function(
        otherCodeEvalResult) {
      return (
        this._preprocessedCode === otherCodeEvalResult.getPreprocessedCode());
    };

    /**
     * A getter for the _output property.
     * The function should return a string of the output for the code that was
     * run.
     *
     * @returns {string}
     */
    CodeEvalResult.prototype.getOutput = function() {
      return this._output;
    };

    /**
     * A getter for the _correctnessTestResults
     * property. The function should return a 2D array of the results for each
     * task and their respective correctness test results.
     *
     * @returns {Array}
     */
    CodeEvalResult.prototype.getCorrectnessTestResults = function() {
      return this._correctnessTestResults;
    };

    /**
     * Returns the results for the last task that is run
     * from the correctnessTests. The function should return the last array in
     * _correctnessTestResults.
     *
     * @returns {Object}
     */
    CodeEvalResult.prototype.getLastTaskResults = function() {
      return this._correctnessTestResults[
        this._correctnessTestResults.length - 1];
    };

    /**
     * A getter for the _buggyOutputTestResults
     * property. The function should return a list of buggy output test results.
     *
     * @returns {Array}
     */
    CodeEvalResult.prototype.getBuggyOutputTestResults = function() {
      return this._buggyOutputTestResults;
    };

    /**
     * A getter for the _performanceTestResults
     * property. The function should return a list of Objects where results
     * are stored for each task and test.
     *
     * @returns {Array}
     */
    CodeEvalResult.prototype.getPerformanceTestResults = function() {
      return this._performanceTestResults;
    };

    /**
     * Returns a string describing an error (if there is one) in
     * the code results.
     * The function should return a string if there is an error traceback in the
     * code results. Otherwise, it should return null.
     *
     * @returns {string}
     */
    CodeEvalResult.prototype.getErrorString = function() {
      if (!this._errorTraceback) {
        return null;
      }
      return this._errorTraceback.getErrorString();
    };

    /**
     * A getter for the _errorInput property.
     * This function should return a string containing the input that threw
     * the error seen in the _errorTraceback property.
     *
     * @returns {string}
     */
    CodeEvalResult.prototype.getErrorInput = function() {
      return this._errorInput;
    };

    // Static class methods.
    /**
     * This method creates and returns a CodeEvalResult object from the params
     * specified.
     *
     * @param {string} preprocessedCode Preprocessed submitted code
     * @param {string} output Output from the code
     * @param {Array} correctnessTestResults Correctness test results
     * @param {Array} buggyOutputTestResults Buggy test results
     * @param {Array} performanceTestResults Performance test results
     * @param {ErrorTraceback} errorTraceback Traceback of the error
     * @param {string} errorInput Input that caused the error
     * @returns {CodeEvalResult}
     */
    CodeEvalResult.create = function(
        preprocessedCode, output, correctnessTestResults,
        buggyOutputTestResults, performanceTestResults, errorTraceback,
        errorInput) {
      return new CodeEvalResult(
        preprocessedCode, output, correctnessTestResults,
        buggyOutputTestResults, performanceTestResults, errorTraceback,
        errorInput);
    };

    return CodeEvalResult;
  }
]);
