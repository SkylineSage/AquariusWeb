(function () {
    'use strict';

    /**
     * Contains the list of OpenAPI data types
     * as defined by https://swagger.io/docs/specification/data-models/data-types/
     * @public
     */
    var FunctionDeclarationSchemaType;
    (function (FunctionDeclarationSchemaType) {
        /** String type. */
        FunctionDeclarationSchemaType["STRING"] = "STRING";
        /** Number type. */
        FunctionDeclarationSchemaType["NUMBER"] = "NUMBER";
        /** Integer type. */
        FunctionDeclarationSchemaType["INTEGER"] = "INTEGER";
        /** Boolean type. */
        FunctionDeclarationSchemaType["BOOLEAN"] = "BOOLEAN";
        /** Array type. */
        FunctionDeclarationSchemaType["ARRAY"] = "ARRAY";
        /** Object type. */
        FunctionDeclarationSchemaType["OBJECT"] = "OBJECT";
    })(FunctionDeclarationSchemaType || (FunctionDeclarationSchemaType = {}));

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @public
     */
    var ExecutableCodeLanguage;
    (function (ExecutableCodeLanguage) {
        ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
        ExecutableCodeLanguage["PYTHON"] = "python";
    })(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
    /**
     * Possible outcomes of code execution.
     * @public
     */
    var Outcome;
    (function (Outcome) {
        /**
         * Unspecified status. This value should not be used.
         */
        Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
        /**
         * Code execution completed successfully.
         */
        Outcome["OUTCOME_OK"] = "outcome_ok";
        /**
         * Code execution finished but with a failure. `stderr` should contain the
         * reason.
         */
        Outcome["OUTCOME_FAILED"] = "outcome_failed";
        /**
         * Code execution ran for too long, and was cancelled. There may or may not
         * be a partial output present.
         */
        Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
    })(Outcome || (Outcome = {}));

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Possible roles.
     * @public
     */
    const POSSIBLE_ROLES = ["user", "model", "function", "system"];
    /**
     * Harm categories that would cause prompts or candidates to be blocked.
     * @public
     */
    var HarmCategory;
    (function (HarmCategory) {
        HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
        HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
        HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
        HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
        HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    })(HarmCategory || (HarmCategory = {}));
    /**
     * Threshold above which a prompt or candidate will be blocked.
     * @public
     */
    var HarmBlockThreshold;
    (function (HarmBlockThreshold) {
        // Threshold is unspecified.
        HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
        // Content with NEGLIGIBLE will be allowed.
        HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
        // Content with NEGLIGIBLE and LOW will be allowed.
        HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
        // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
        HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
        // All content will be allowed.
        HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
    })(HarmBlockThreshold || (HarmBlockThreshold = {}));
    /**
     * Probability that a prompt or candidate matches a harm category.
     * @public
     */
    var HarmProbability;
    (function (HarmProbability) {
        // Probability is unspecified.
        HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
        // Content has a negligible chance of being unsafe.
        HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
        // Content has a low chance of being unsafe.
        HarmProbability["LOW"] = "LOW";
        // Content has a medium chance of being unsafe.
        HarmProbability["MEDIUM"] = "MEDIUM";
        // Content has a high chance of being unsafe.
        HarmProbability["HIGH"] = "HIGH";
    })(HarmProbability || (HarmProbability = {}));
    /**
     * Reason that a prompt was blocked.
     * @public
     */
    var BlockReason;
    (function (BlockReason) {
        // A blocked reason was not specified.
        BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
        // Content was blocked by safety settings.
        BlockReason["SAFETY"] = "SAFETY";
        // Content was blocked, but the reason is uncategorized.
        BlockReason["OTHER"] = "OTHER";
    })(BlockReason || (BlockReason = {}));
    /**
     * Reason that a candidate finished.
     * @public
     */
    var FinishReason;
    (function (FinishReason) {
        // Default value. This value is unused.
        FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
        // Natural stop point of the model or provided stop sequence.
        FinishReason["STOP"] = "STOP";
        // The maximum number of tokens as specified in the request was reached.
        FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
        // The candidate content was flagged for safety reasons.
        FinishReason["SAFETY"] = "SAFETY";
        // The candidate content was flagged for recitation reasons.
        FinishReason["RECITATION"] = "RECITATION";
        // The candidate content was flagged for using an unsupported language.
        FinishReason["LANGUAGE"] = "LANGUAGE";
        // Unknown reason.
        FinishReason["OTHER"] = "OTHER";
    })(FinishReason || (FinishReason = {}));
    /**
     * Task type for embedding content.
     * @public
     */
    var TaskType;
    (function (TaskType) {
        TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
        TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
        TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
        TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
        TaskType["CLASSIFICATION"] = "CLASSIFICATION";
        TaskType["CLUSTERING"] = "CLUSTERING";
    })(TaskType || (TaskType = {}));
    /**
     * @public
     */
    var FunctionCallingMode;
    (function (FunctionCallingMode) {
        // Unspecified function calling mode. This value should not be used.
        FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
        // Default model behavior, model decides to predict either a function call
        // or a natural language repspose.
        FunctionCallingMode["AUTO"] = "AUTO";
        // Model is constrained to always predicting a function call only.
        // If "allowed_function_names" are set, the predicted function call will be
        // limited to any one of "allowed_function_names", else the predicted
        // function call will be any one of the provided "function_declarations".
        FunctionCallingMode["ANY"] = "ANY";
        // Model will not predict any function call. Model behavior is same as when
        // not passing any function declarations.
        FunctionCallingMode["NONE"] = "NONE";
    })(FunctionCallingMode || (FunctionCallingMode = {}));

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Basic error type for this SDK.
     * @public
     */
    class GoogleGenerativeAIError extends Error {
        constructor(message) {
            super(`[GoogleGenerativeAI Error]: ${message}`);
        }
    }
    /**
     * Errors in the contents of a response from the model. This includes parsing
     * errors, or responses including a safety block reason.
     * @public
     */
    class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
        constructor(message, response) {
            super(message);
            this.response = response;
        }
    }
    /**
     * Error class covering HTTP errors when calling the server. Includes HTTP
     * status, statusText, and optional details, if provided in the server response.
     * @public
     */
    class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
        constructor(message, status, statusText, errorDetails) {
            super(message);
            this.status = status;
            this.statusText = statusText;
            this.errorDetails = errorDetails;
        }
    }
    /**
     * Errors in the contents of a request originating from user input.
     * @public
     */
    class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
    const DEFAULT_API_VERSION = "v1beta";
    /**
     * We can't `require` package.json if this runs on web. We will use rollup to
     * swap in the version number here at build time.
     */
    const PACKAGE_VERSION = "0.15.0";
    const PACKAGE_LOG_HEADER = "genai-js";
    var Task;
    (function (Task) {
        Task["GENERATE_CONTENT"] = "generateContent";
        Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
        Task["COUNT_TOKENS"] = "countTokens";
        Task["EMBED_CONTENT"] = "embedContent";
        Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
    })(Task || (Task = {}));
    class RequestUrl {
        constructor(model, task, apiKey, stream, requestOptions) {
            this.model = model;
            this.task = task;
            this.apiKey = apiKey;
            this.stream = stream;
            this.requestOptions = requestOptions;
        }
        toString() {
            var _a, _b;
            const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
            const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
            let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
            if (this.stream) {
                url += "?alt=sse";
            }
            return url;
        }
    }
    /**
     * Simple, but may become more complex if we add more versions to log.
     */
    function getClientHeaders(requestOptions) {
        const clientHeaders = [];
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
            clientHeaders.push(requestOptions.apiClient);
        }
        clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
        return clientHeaders.join(" ");
    }
    async function getHeaders(url) {
        var _a;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
        headers.append("x-goog-api-key", url.apiKey);
        let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
        if (customHeaders) {
            if (!(customHeaders instanceof Headers)) {
                try {
                    customHeaders = new Headers(customHeaders);
                }
                catch (e) {
                    throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
                }
            }
            for (const [headerName, headerValue] of customHeaders.entries()) {
                if (headerName === "x-goog-api-key") {
                    throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
                }
                else if (headerName === "x-goog-api-client") {
                    throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
                }
                headers.append(headerName, headerValue);
            }
        }
        return headers;
    }
    async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
        const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
        return {
            url: url.toString(),
            fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), { method: "POST", headers: await getHeaders(url), body }),
        };
    }
    async function makeModelRequest(model, task, apiKey, stream, body, requestOptions, 
    // Allows this to be stubbed for tests
    fetchFn = fetch) {
        const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
        return makeRequest(url, fetchOptions, fetchFn);
    }
    async function makeRequest(url, fetchOptions, fetchFn = fetch) {
        let response;
        try {
            response = await fetchFn(url, fetchOptions);
        }
        catch (e) {
            handleResponseError(e, url);
        }
        if (!response.ok) {
            await handleResponseNotOk(response, url);
        }
        return response;
    }
    function handleResponseError(e, url) {
        let err = e;
        if (!(e instanceof GoogleGenerativeAIFetchError ||
            e instanceof GoogleGenerativeAIRequestInputError)) {
            err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
            err.stack = e.stack;
        }
        throw err;
    }
    async function handleResponseNotOk(response, url) {
        let message = "";
        let errorDetails;
        try {
            const json = await response.json();
            message = json.error.message;
            if (json.error.details) {
                message += ` ${JSON.stringify(json.error.details)}`;
                errorDetails = json.error.details;
            }
        }
        catch (e) {
            // ignored
        }
        throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
    }
    /**
     * Generates the request options to be passed to the fetch API.
     * @param requestOptions - The user-defined request options.
     * @returns The generated request options.
     */
    function buildFetchOptions(requestOptions) {
        const fetchOptions = {};
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            const abortController = new AbortController();
            const signal = abortController.signal;
            setTimeout(() => abortController.abort(), requestOptions.timeout);
            fetchOptions.signal = signal;
        }
        return fetchOptions;
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Adds convenience helper methods to a response object, including stream
     * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
     */
    function addHelpers(response) {
        response.text = () => {
            if (response.candidates && response.candidates.length > 0) {
                if (response.candidates.length > 1) {
                    console.warn(`This response had ${response.candidates.length} ` +
                        `candidates. Returning text from the first candidate only. ` +
                        `Access response.candidates directly to use the other candidates.`);
                }
                if (hadBadFinishReason(response.candidates[0])) {
                    throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
                }
                return getText(response);
            }
            else if (response.promptFeedback) {
                throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
            }
            return "";
        };
        /**
         * TODO: remove at next major version
         */
        response.functionCall = () => {
            if (response.candidates && response.candidates.length > 0) {
                if (response.candidates.length > 1) {
                    console.warn(`This response had ${response.candidates.length} ` +
                        `candidates. Returning function calls from the first candidate only. ` +
                        `Access response.candidates directly to use the other candidates.`);
                }
                if (hadBadFinishReason(response.candidates[0])) {
                    throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
                }
                console.warn(`response.functionCall() is deprecated. ` +
                    `Use response.functionCalls() instead.`);
                return getFunctionCalls(response)[0];
            }
            else if (response.promptFeedback) {
                throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
            }
            return undefined;
        };
        response.functionCalls = () => {
            if (response.candidates && response.candidates.length > 0) {
                if (response.candidates.length > 1) {
                    console.warn(`This response had ${response.candidates.length} ` +
                        `candidates. Returning function calls from the first candidate only. ` +
                        `Access response.candidates directly to use the other candidates.`);
                }
                if (hadBadFinishReason(response.candidates[0])) {
                    throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
                }
                return getFunctionCalls(response);
            }
            else if (response.promptFeedback) {
                throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
            }
            return undefined;
        };
        return response;
    }
    /**
     * Returns all text found in all parts of first candidate.
     */
    function getText(response) {
        var _a, _b, _c, _d;
        const textStrings = [];
        if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
            for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts) {
                if (part.text) {
                    textStrings.push(part.text);
                }
                if (part.executableCode) {
                    textStrings.push("\n```python\n" + part.executableCode.code + "\n```\n");
                }
                if (part.codeExecutionResult) {
                    textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
                }
            }
        }
        if (textStrings.length > 0) {
            return textStrings.join("");
        }
        else {
            return "";
        }
    }
    /**
     * Returns functionCall of first candidate.
     */
    function getFunctionCalls(response) {
        var _a, _b, _c, _d;
        const functionCalls = [];
        if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
            for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts) {
                if (part.functionCall) {
                    functionCalls.push(part.functionCall);
                }
            }
        }
        if (functionCalls.length > 0) {
            return functionCalls;
        }
        else {
            return undefined;
        }
    }
    const badFinishReasons = [
        FinishReason.RECITATION,
        FinishReason.SAFETY,
        FinishReason.LANGUAGE,
    ];
    function hadBadFinishReason(candidate) {
        return (!!candidate.finishReason &&
            badFinishReasons.includes(candidate.finishReason));
    }
    function formatBlockErrorMessage(response) {
        var _a, _b, _c;
        let message = "";
        if ((!response.candidates || response.candidates.length === 0) &&
            response.promptFeedback) {
            message += "Response was blocked";
            if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
                message += ` due to ${response.promptFeedback.blockReason}`;
            }
            if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
                message += `: ${response.promptFeedback.blockReasonMessage}`;
            }
        }
        else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
            const firstCandidate = response.candidates[0];
            if (hadBadFinishReason(firstCandidate)) {
                message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
                if (firstCandidate.finishMessage) {
                    message += `: ${firstCandidate.finishMessage}`;
                }
            }
        }
        return message;
    }

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
    /**
     * Process a response.body stream from the backend and return an
     * iterator that provides one complete GenerateContentResponse at a time
     * and a promise that resolves with a single aggregated
     * GenerateContentResponse.
     *
     * @param response - Response from a fetch call
     */
    function processStream(response) {
        const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", { fatal: true }));
        const responseStream = getResponseStream(inputStream);
        const [stream1, stream2] = responseStream.tee();
        return {
            stream: generateResponseSequence(stream1),
            response: getResponsePromise(stream2),
        };
    }
    async function getResponsePromise(stream) {
        const allResponses = [];
        const reader = stream.getReader();
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                return addHelpers(aggregateResponses(allResponses));
            }
            allResponses.push(value);
        }
    }
    function generateResponseSequence(stream) {
        return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
            const reader = stream.getReader();
            while (true) {
                const { value, done } = yield __await(reader.read());
                if (done) {
                    break;
                }
                yield yield __await(addHelpers(value));
            }
        });
    }
    /**
     * Reads a raw stream from the fetch response and join incomplete
     * chunks, returning a new stream that provides a single complete
     * GenerateContentResponse in each iteration.
     */
    function getResponseStream(inputStream) {
        const reader = inputStream.getReader();
        const stream = new ReadableStream({
            start(controller) {
                let currentText = "";
                return pump();
                function pump() {
                    return reader.read().then(({ value, done }) => {
                        if (done) {
                            if (currentText.trim()) {
                                controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                                return;
                            }
                            controller.close();
                            return;
                        }
                        currentText += value;
                        let match = currentText.match(responseLineRE);
                        let parsedResponse;
                        while (match) {
                            try {
                                parsedResponse = JSON.parse(match[1]);
                            }
                            catch (e) {
                                controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                                return;
                            }
                            controller.enqueue(parsedResponse);
                            currentText = currentText.substring(match[0].length);
                            match = currentText.match(responseLineRE);
                        }
                        return pump();
                    });
                }
            },
        });
        return stream;
    }
    /**
     * Aggregates an array of `GenerateContentResponse`s into a single
     * GenerateContentResponse.
     */
    function aggregateResponses(responses) {
        const lastResponse = responses[responses.length - 1];
        const aggregatedResponse = {
            promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback,
        };
        for (const response of responses) {
            if (response.candidates) {
                for (const candidate of response.candidates) {
                    const i = candidate.index;
                    if (!aggregatedResponse.candidates) {
                        aggregatedResponse.candidates = [];
                    }
                    if (!aggregatedResponse.candidates[i]) {
                        aggregatedResponse.candidates[i] = {
                            index: candidate.index,
                        };
                    }
                    // Keep overwriting, the last one will be final
                    aggregatedResponse.candidates[i].citationMetadata =
                        candidate.citationMetadata;
                    aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
                    aggregatedResponse.candidates[i].finishMessage =
                        candidate.finishMessage;
                    aggregatedResponse.candidates[i].safetyRatings =
                        candidate.safetyRatings;
                    /**
                     * Candidates should always have content and parts, but this handles
                     * possible malformed responses.
                     */
                    if (candidate.content && candidate.content.parts) {
                        if (!aggregatedResponse.candidates[i].content) {
                            aggregatedResponse.candidates[i].content = {
                                role: candidate.content.role || "user",
                                parts: [],
                            };
                        }
                        const newPart = {};
                        for (const part of candidate.content.parts) {
                            if (part.text) {
                                newPart.text = part.text;
                            }
                            if (part.functionCall) {
                                newPart.functionCall = part.functionCall;
                            }
                            if (part.executableCode) {
                                newPart.executableCode = part.executableCode;
                            }
                            if (part.codeExecutionResult) {
                                newPart.codeExecutionResult = part.codeExecutionResult;
                            }
                            if (Object.keys(newPart).length === 0) {
                                newPart.text = "";
                            }
                            aggregatedResponse.candidates[i].content.parts.push(newPart);
                        }
                    }
                }
            }
            if (response.usageMetadata) {
                aggregatedResponse.usageMetadata = response.usageMetadata;
            }
        }
        return aggregatedResponse;
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function generateContentStream(apiKey, model, params, requestOptions) {
        const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, 
        /* stream */ true, JSON.stringify(params), requestOptions);
        return processStream(response);
    }
    async function generateContent(apiKey, model, params, requestOptions) {
        const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, 
        /* stream */ false, JSON.stringify(params), requestOptions);
        const responseJson = await response.json();
        const enhancedResponse = addHelpers(responseJson);
        return {
            response: enhancedResponse,
        };
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function formatSystemInstruction(input) {
        // null or undefined
        if (input == null) {
            return undefined;
        }
        else if (typeof input === "string") {
            return { role: "system", parts: [{ text: input }] };
        }
        else if (input.text) {
            return { role: "system", parts: [input] };
        }
        else if (input.parts) {
            if (!input.role) {
                return { role: "system", parts: input.parts };
            }
            else {
                return input;
            }
        }
    }
    function formatNewContent(request) {
        let newParts = [];
        if (typeof request === "string") {
            newParts = [{ text: request }];
        }
        else {
            for (const partOrString of request) {
                if (typeof partOrString === "string") {
                    newParts.push({ text: partOrString });
                }
                else {
                    newParts.push(partOrString);
                }
            }
        }
        return assignRoleToPartsAndValidateSendMessageRequest(newParts);
    }
    /**
     * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
     * passed in a single Part array, we may need to assign different roles to each
     * part. Currently only FunctionResponsePart requires a role other than 'user'.
     * @private
     * @param parts Array of parts to pass to the model
     * @returns Array of content items
     */
    function assignRoleToPartsAndValidateSendMessageRequest(parts) {
        const userContent = { role: "user", parts: [] };
        const functionContent = { role: "function", parts: [] };
        let hasUserContent = false;
        let hasFunctionContent = false;
        for (const part of parts) {
            if ("functionResponse" in part) {
                functionContent.parts.push(part);
                hasFunctionContent = true;
            }
            else {
                userContent.parts.push(part);
                hasUserContent = true;
            }
        }
        if (hasUserContent && hasFunctionContent) {
            throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
        }
        if (!hasUserContent && !hasFunctionContent) {
            throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
        }
        if (hasUserContent) {
            return userContent;
        }
        return functionContent;
    }
    function formatCountTokensInput(params, modelParams) {
        var _a;
        let formattedGenerateContentRequest = {
            model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
            generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
            safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
            tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
            toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
            systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
            cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
            contents: [],
        };
        const containsGenerateContentRequest = params.generateContentRequest != null;
        if (params.contents) {
            if (containsGenerateContentRequest) {
                throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
            }
            formattedGenerateContentRequest.contents = params.contents;
        }
        else if (containsGenerateContentRequest) {
            formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
        }
        else {
            // Array or string
            const content = formatNewContent(params);
            formattedGenerateContentRequest.contents = [content];
        }
        return { generateContentRequest: formattedGenerateContentRequest };
    }
    function formatGenerateContentInput(params) {
        let formattedRequest;
        if (params.contents) {
            formattedRequest = params;
        }
        else {
            // Array or string
            const content = formatNewContent(params);
            formattedRequest = { contents: [content] };
        }
        if (params.systemInstruction) {
            formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
        }
        return formattedRequest;
    }
    function formatEmbedContentInput(params) {
        if (typeof params === "string" || Array.isArray(params)) {
            const content = formatNewContent(params);
            return { content };
        }
        return params;
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // https://ai.google.dev/api/rest/v1beta/Content#part
    const VALID_PART_FIELDS = [
        "text",
        "inlineData",
        "functionCall",
        "functionResponse",
        "executableCode",
        "codeExecutionResult",
    ];
    const VALID_PARTS_PER_ROLE = {
        user: ["text", "inlineData"],
        function: ["functionResponse"],
        model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
        // System instructions shouldn't be in history anyway.
        system: ["text"],
    };
    function validateChatHistory(history) {
        let prevContent = false;
        for (const currContent of history) {
            const { role, parts } = currContent;
            if (!prevContent && role !== "user") {
                throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
            }
            if (!POSSIBLE_ROLES.includes(role)) {
                throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
            }
            if (!Array.isArray(parts)) {
                throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
            }
            if (parts.length === 0) {
                throw new GoogleGenerativeAIError("Each Content should have at least one part");
            }
            const countFields = {
                text: 0,
                inlineData: 0,
                functionCall: 0,
                functionResponse: 0,
                fileData: 0,
                executableCode: 0,
                codeExecutionResult: 0,
            };
            for (const part of parts) {
                for (const key of VALID_PART_FIELDS) {
                    if (key in part) {
                        countFields[key] += 1;
                    }
                }
            }
            const validParts = VALID_PARTS_PER_ROLE[role];
            for (const key of VALID_PART_FIELDS) {
                if (!validParts.includes(key) && countFields[key] > 0) {
                    throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
                }
            }
            prevContent = true;
        }
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Do not log a message for this error.
     */
    const SILENT_ERROR = "SILENT_ERROR";
    /**
     * ChatSession class that enables sending chat messages and stores
     * history of sent and received messages so far.
     *
     * @public
     */
    class ChatSession {
        constructor(apiKey, model, params, requestOptions) {
            this.model = model;
            this.params = params;
            this.requestOptions = requestOptions;
            this._history = [];
            this._sendPromise = Promise.resolve();
            this._apiKey = apiKey;
            if (params === null || params === void 0 ? void 0 : params.history) {
                validateChatHistory(params.history);
                this._history = params.history;
            }
        }
        /**
         * Gets the chat history so far. Blocked prompts are not added to history.
         * Blocked candidates are not added to history, nor are the prompts that
         * generated them.
         */
        async getHistory() {
            await this._sendPromise;
            return this._history;
        }
        /**
         * Sends a chat message and receives a non-streaming
         * {@link GenerateContentResult}
         */
        async sendMessage(request) {
            var _a, _b, _c, _d, _e, _f;
            await this._sendPromise;
            const newContent = formatNewContent(request);
            const generateContentRequest = {
                safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
                generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
                tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
                toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
                systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
                cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
                contents: [...this._history, newContent],
            };
            let finalResult;
            // Add onto the chain.
            this._sendPromise = this._sendPromise
                .then(() => generateContent(this._apiKey, this.model, generateContentRequest, this.requestOptions))
                .then((result) => {
                var _a;
                if (result.response.candidates &&
                    result.response.candidates.length > 0) {
                    this._history.push(newContent);
                    const responseContent = Object.assign({ parts: [], 
                        // Response seems to come back without a role set.
                        role: "model" }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                    this._history.push(responseContent);
                }
                else {
                    const blockErrorMessage = formatBlockErrorMessage(result.response);
                    if (blockErrorMessage) {
                        console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                    }
                }
                finalResult = result;
            });
            await this._sendPromise;
            return finalResult;
        }
        /**
         * Sends a chat message and receives the response as a
         * {@link GenerateContentStreamResult} containing an iterable stream
         * and a response promise.
         */
        async sendMessageStream(request) {
            var _a, _b, _c, _d, _e, _f;
            await this._sendPromise;
            const newContent = formatNewContent(request);
            const generateContentRequest = {
                safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
                generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
                tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
                toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
                systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
                cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
                contents: [...this._history, newContent],
            };
            const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, this.requestOptions);
            // Add onto the chain.
            this._sendPromise = this._sendPromise
                .then(() => streamPromise)
                // This must be handled to avoid unhandled rejection, but jump
                // to the final catch block with a label to not log this error.
                .catch((_ignored) => {
                throw new Error(SILENT_ERROR);
            })
                .then((streamResult) => streamResult.response)
                .then((response) => {
                if (response.candidates && response.candidates.length > 0) {
                    this._history.push(newContent);
                    const responseContent = Object.assign({}, response.candidates[0].content);
                    // Response seems to come back without a role set.
                    if (!responseContent.role) {
                        responseContent.role = "model";
                    }
                    this._history.push(responseContent);
                }
                else {
                    const blockErrorMessage = formatBlockErrorMessage(response);
                    if (blockErrorMessage) {
                        console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                    }
                }
            })
                .catch((e) => {
                // Errors in streamPromise are already catchable by the user as
                // streamPromise is returned.
                // Avoid duplicating the error message in logs.
                if (e.message !== SILENT_ERROR) {
                    // Users do not have access to _sendPromise to catch errors
                    // downstream from streamPromise, so they should not throw.
                    console.error(e);
                }
            });
            return streamPromise;
        }
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function countTokens(apiKey, model, params, requestOptions) {
        const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), requestOptions);
        return response.json();
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function embedContent(apiKey, model, params, requestOptions) {
        const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
        return response.json();
    }
    async function batchEmbedContents(apiKey, model, params, requestOptions) {
        const requestsWithModel = params.requests.map((request) => {
            return Object.assign(Object.assign({}, request), { model });
        });
        const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({ requests: requestsWithModel }), requestOptions);
        return response.json();
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Class for generative model APIs.
     * @public
     */
    class GenerativeModel {
        constructor(apiKey, modelParams, requestOptions) {
            this.apiKey = apiKey;
            if (modelParams.model.includes("/")) {
                // Models may be named "models/model-name" or "tunedModels/model-name"
                this.model = modelParams.model;
            }
            else {
                // If path is not included, assume it's a non-tuned model.
                this.model = `models/${modelParams.model}`;
            }
            this.generationConfig = modelParams.generationConfig || {};
            this.safetySettings = modelParams.safetySettings || [];
            this.tools = modelParams.tools;
            this.toolConfig = modelParams.toolConfig;
            this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
            this.cachedContent = modelParams.cachedContent;
            this.requestOptions = requestOptions || {};
        }
        /**
         * Makes a single non-streaming call to the model
         * and returns an object containing a single {@link GenerateContentResponse}.
         */
        async generateContent(request) {
            var _a;
            const formattedParams = formatGenerateContentInput(request);
            return generateContent(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, formattedParams), this.requestOptions);
        }
        /**
         * Makes a single streaming call to the model
         * and returns an object containing an iterable stream that iterates
         * over all chunks in the streaming response as well as
         * a promise that returns the final aggregated response.
         */
        async generateContentStream(request) {
            var _a;
            const formattedParams = formatGenerateContentInput(request);
            return generateContentStream(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, formattedParams), this.requestOptions);
        }
        /**
         * Gets a new {@link ChatSession} instance which can be used for
         * multi-turn chats.
         */
        startChat(startChatParams) {
            var _a;
            return new ChatSession(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, startChatParams), this.requestOptions);
        }
        /**
         * Counts the tokens in the provided request.
         */
        async countTokens(request) {
            const formattedParams = formatCountTokensInput(request, {
                model: this.model,
                generationConfig: this.generationConfig,
                safetySettings: this.safetySettings,
                tools: this.tools,
                toolConfig: this.toolConfig,
                systemInstruction: this.systemInstruction,
                cachedContent: this.cachedContent,
            });
            return countTokens(this.apiKey, this.model, formattedParams, this.requestOptions);
        }
        /**
         * Embeds the provided content.
         */
        async embedContent(request) {
            const formattedParams = formatEmbedContentInput(request);
            return embedContent(this.apiKey, this.model, formattedParams, this.requestOptions);
        }
        /**
         * Embeds an array of {@link EmbedContentRequest}s.
         */
        async batchEmbedContents(batchEmbedContentRequest) {
            return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, this.requestOptions);
        }
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Top-level class for this SDK
     * @public
     */
    class GoogleGenerativeAI {
        constructor(apiKey) {
            this.apiKey = apiKey;
        }
        /**
         * Gets a {@link GenerativeModel} instance for the provided model name.
         */
        getGenerativeModel(modelParams, requestOptions) {
            if (!modelParams.model) {
                throw new GoogleGenerativeAIError(`Must provide a model name. ` +
                    `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
            }
            return new GenerativeModel(this.apiKey, modelParams, requestOptions);
        }
        /**
         * Creates a {@link GenerativeModel} instance from provided content cache.
         */
        getGenerativeModelFromCachedContent(cachedContent, requestOptions) {
            if (!cachedContent.name) {
                throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
            }
            if (!cachedContent.model) {
                throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
            }
            const modelParamsFromCache = {
                model: cachedContent.model,
                tools: cachedContent.tools,
                toolConfig: cachedContent.toolConfig,
                systemInstruction: cachedContent.systemInstruction,
                cachedContent,
            };
            return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
        }
    }

    /**
     * marked v14.1.3 - a markdown parser
     * Copyright (c) 2011-2024, Christopher Jeffrey. (MIT Licensed)
     * https://github.com/markedjs/marked
     */

    /**
     * DO NOT EDIT THIS FILE
     * The code in this file is generated from files in ./src/
     */

    /**
     * Gets the original marked default options.
     */
    function _getDefaults() {
        return {
            async: false,
            breaks: false,
            extensions: null,
            gfm: true,
            hooks: null,
            pedantic: false,
            renderer: null,
            silent: false,
            tokenizer: null,
            walkTokens: null,
        };
    }
    let _defaults = _getDefaults();
    function changeDefaults(newDefaults) {
        _defaults = newDefaults;
    }

    /**
     * Helpers
     */
    const escapeTest = /[&<>"']/;
    const escapeReplace = new RegExp(escapeTest.source, 'g');
    const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
    const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
    const escapeReplacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    const getEscapeReplacement = (ch) => escapeReplacements[ch];
    function escape$1(html, encode) {
        if (encode) {
            if (escapeTest.test(html)) {
                return html.replace(escapeReplace, getEscapeReplacement);
            }
        }
        else {
            if (escapeTestNoEncode.test(html)) {
                return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
            }
        }
        return html;
    }
    const caret = /(^|[^\[])\^/g;
    function edit(regex, opt) {
        let source = typeof regex === 'string' ? regex : regex.source;
        opt = opt || '';
        const obj = {
            replace: (name, val) => {
                let valSource = typeof val === 'string' ? val : val.source;
                valSource = valSource.replace(caret, '$1');
                source = source.replace(name, valSource);
                return obj;
            },
            getRegex: () => {
                return new RegExp(source, opt);
            },
        };
        return obj;
    }
    function cleanUrl(href) {
        try {
            href = encodeURI(href).replace(/%25/g, '%');
        }
        catch {
            return null;
        }
        return href;
    }
    const noopTest = { exec: () => null };
    function splitCells(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        const row = tableRow.replace(/\|/g, (match, offset, str) => {
            let escaped = false;
            let curr = offset;
            while (--curr >= 0 && str[curr] === '\\')
                escaped = !escaped;
            if (escaped) {
                // odd number of slashes means | is escaped
                // so we leave it alone
                return '|';
            }
            else {
                // add space before unescaped |
                return ' |';
            }
        }), cells = row.split(/ \|/);
        let i = 0;
        // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) {
            cells.shift();
        }
        if (cells.length > 0 && !cells[cells.length - 1].trim()) {
            cells.pop();
        }
        if (count) {
            if (cells.length > count) {
                cells.splice(count);
            }
            else {
                while (cells.length < count)
                    cells.push('');
            }
        }
        for (; i < cells.length; i++) {
            // leading or trailing whitespace is ignored per the gfm spec
            cells[i] = cells[i].trim().replace(/\\\|/g, '|');
        }
        return cells;
    }
    /**
     * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
     * /c*$/ is vulnerable to REDOS.
     *
     * @param str
     * @param c
     * @param invert Remove suffix of non-c chars instead. Default falsey.
     */
    function rtrim(str, c, invert) {
        const l = str.length;
        if (l === 0) {
            return '';
        }
        // Length of suffix matching the invert condition.
        let suffLen = 0;
        // Step left until we fail to match the invert condition.
        while (suffLen < l) {
            const currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) {
                suffLen++;
            }
            else if (currChar !== c && invert) {
                suffLen++;
            }
            else {
                break;
            }
        }
        return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
        if (str.indexOf(b[1]) === -1) {
            return -1;
        }
        let level = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '\\') {
                i++;
            }
            else if (str[i] === b[0]) {
                level++;
            }
            else if (str[i] === b[1]) {
                level--;
                if (level < 0) {
                    return i;
                }
            }
        }
        return -1;
    }

    function outputLink(cap, link, raw, lexer) {
        const href = link.href;
        const title = link.title ? escape$1(link.title) : null;
        const text = cap[1].replace(/\\([\[\]])/g, '$1');
        if (cap[0].charAt(0) !== '!') {
            lexer.state.inLink = true;
            const token = {
                type: 'link',
                raw,
                href,
                title,
                text,
                tokens: lexer.inlineTokens(text),
            };
            lexer.state.inLink = false;
            return token;
        }
        return {
            type: 'image',
            raw,
            href,
            title,
            text: escape$1(text),
        };
    }
    function indentCodeCompensation(raw, text) {
        const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) {
            return text;
        }
        const indentToCode = matchIndentToCode[1];
        return text
            .split('\n')
            .map(node => {
            const matchIndentInNode = node.match(/^\s+/);
            if (matchIndentInNode === null) {
                return node;
            }
            const [indentInNode] = matchIndentInNode;
            if (indentInNode.length >= indentToCode.length) {
                return node.slice(indentToCode.length);
            }
            return node;
        })
            .join('\n');
    }
    /**
     * Tokenizer
     */
    class _Tokenizer {
        options;
        rules; // set by the lexer
        lexer; // set by the lexer
        constructor(options) {
            this.options = options || _defaults;
        }
        space(src) {
            const cap = this.rules.block.newline.exec(src);
            if (cap && cap[0].length > 0) {
                return {
                    type: 'space',
                    raw: cap[0],
                };
            }
        }
        code(src) {
            const cap = this.rules.block.code.exec(src);
            if (cap) {
                const text = cap[0].replace(/^(?: {1,4}| {0,3}\t)/gm, '');
                return {
                    type: 'code',
                    raw: cap[0],
                    codeBlockStyle: 'indented',
                    text: !this.options.pedantic
                        ? rtrim(text, '\n')
                        : text,
                };
            }
        }
        fences(src) {
            const cap = this.rules.block.fences.exec(src);
            if (cap) {
                const raw = cap[0];
                const text = indentCodeCompensation(raw, cap[3] || '');
                return {
                    type: 'code',
                    raw,
                    lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : cap[2],
                    text,
                };
            }
        }
        heading(src) {
            const cap = this.rules.block.heading.exec(src);
            if (cap) {
                let text = cap[2].trim();
                // remove trailing #s
                if (/#$/.test(text)) {
                    const trimmed = rtrim(text, '#');
                    if (this.options.pedantic) {
                        text = trimmed.trim();
                    }
                    else if (!trimmed || / $/.test(trimmed)) {
                        // CommonMark requires space before trailing #s
                        text = trimmed.trim();
                    }
                }
                return {
                    type: 'heading',
                    raw: cap[0],
                    depth: cap[1].length,
                    text,
                    tokens: this.lexer.inline(text),
                };
            }
        }
        hr(src) {
            const cap = this.rules.block.hr.exec(src);
            if (cap) {
                return {
                    type: 'hr',
                    raw: rtrim(cap[0], '\n'),
                };
            }
        }
        blockquote(src) {
            const cap = this.rules.block.blockquote.exec(src);
            if (cap) {
                let lines = rtrim(cap[0], '\n').split('\n');
                let raw = '';
                let text = '';
                const tokens = [];
                while (lines.length > 0) {
                    let inBlockquote = false;
                    const currentLines = [];
                    let i;
                    for (i = 0; i < lines.length; i++) {
                        // get lines up to a continuation
                        if (/^ {0,3}>/.test(lines[i])) {
                            currentLines.push(lines[i]);
                            inBlockquote = true;
                        }
                        else if (!inBlockquote) {
                            currentLines.push(lines[i]);
                        }
                        else {
                            break;
                        }
                    }
                    lines = lines.slice(i);
                    const currentRaw = currentLines.join('\n');
                    const currentText = currentRaw
                        // precede setext continuation with 4 spaces so it isn't a setext
                        .replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, '\n    $1')
                        .replace(/^ {0,3}>[ \t]?/gm, '');
                    raw = raw ? `${raw}\n${currentRaw}` : currentRaw;
                    text = text ? `${text}\n${currentText}` : currentText;
                    // parse blockquote lines as top level tokens
                    // merge paragraphs if this is a continuation
                    const top = this.lexer.state.top;
                    this.lexer.state.top = true;
                    this.lexer.blockTokens(currentText, tokens, true);
                    this.lexer.state.top = top;
                    // if there is no continuation then we are done
                    if (lines.length === 0) {
                        break;
                    }
                    const lastToken = tokens[tokens.length - 1];
                    if (lastToken?.type === 'code') {
                        // blockquote continuation cannot be preceded by a code block
                        break;
                    }
                    else if (lastToken?.type === 'blockquote') {
                        // include continuation in nested blockquote
                        const oldToken = lastToken;
                        const newText = oldToken.raw + '\n' + lines.join('\n');
                        const newToken = this.blockquote(newText);
                        tokens[tokens.length - 1] = newToken;
                        raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
                        text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
                        break;
                    }
                    else if (lastToken?.type === 'list') {
                        // include continuation in nested list
                        const oldToken = lastToken;
                        const newText = oldToken.raw + '\n' + lines.join('\n');
                        const newToken = this.list(newText);
                        tokens[tokens.length - 1] = newToken;
                        raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
                        text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
                        lines = newText.substring(tokens[tokens.length - 1].raw.length).split('\n');
                        continue;
                    }
                }
                return {
                    type: 'blockquote',
                    raw,
                    tokens,
                    text,
                };
            }
        }
        list(src) {
            let cap = this.rules.block.list.exec(src);
            if (cap) {
                let bull = cap[1].trim();
                const isordered = bull.length > 1;
                const list = {
                    type: 'list',
                    raw: '',
                    ordered: isordered,
                    start: isordered ? +bull.slice(0, -1) : '',
                    loose: false,
                    items: [],
                };
                bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
                if (this.options.pedantic) {
                    bull = isordered ? bull : '[*+-]';
                }
                // Get next list item
                const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                let endsWithBlankLine = false;
                // Check if current bullet point can start a new List Item
                while (src) {
                    let endEarly = false;
                    let raw = '';
                    let itemContents = '';
                    if (!(cap = itemRegex.exec(src))) {
                        break;
                    }
                    if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
                        break;
                    }
                    raw = cap[0];
                    src = src.substring(raw.length);
                    let line = cap[2].split('\n', 1)[0].replace(/^\t+/, (t) => ' '.repeat(3 * t.length));
                    let nextLine = src.split('\n', 1)[0];
                    let blankLine = !line.trim();
                    let indent = 0;
                    if (this.options.pedantic) {
                        indent = 2;
                        itemContents = line.trimStart();
                    }
                    else if (blankLine) {
                        indent = cap[1].length + 1;
                    }
                    else {
                        indent = cap[2].search(/[^ ]/); // Find first non-space char
                        indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                        itemContents = line.slice(indent);
                        indent += cap[1].length;
                    }
                    if (blankLine && /^[ \t]*$/.test(nextLine)) { // Items begin with at most one blank line
                        raw += nextLine + '\n';
                        src = src.substring(nextLine.length + 1);
                        endEarly = true;
                    }
                    if (!endEarly) {
                        const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
                        const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
                        const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
                        const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
                        const htmlBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}<[a-z].*>`, 'i');
                        // Check if following lines should be included in List Item
                        while (src) {
                            const rawLine = src.split('\n', 1)[0];
                            let nextLineWithoutTabs;
                            nextLine = rawLine;
                            // Re-align to follow commonmark nesting rules
                            if (this.options.pedantic) {
                                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
                                nextLineWithoutTabs = nextLine;
                            }
                            else {
                                nextLineWithoutTabs = nextLine.replace(/\t/g, '    ');
                            }
                            // End list item if found code fences
                            if (fencesBeginRegex.test(nextLine)) {
                                break;
                            }
                            // End list item if found start of new heading
                            if (headingBeginRegex.test(nextLine)) {
                                break;
                            }
                            // End list item if found start of html block
                            if (htmlBeginRegex.test(nextLine)) {
                                break;
                            }
                            // End list item if found start of new bullet
                            if (nextBulletRegex.test(nextLine)) {
                                break;
                            }
                            // Horizontal rule found
                            if (hrRegex.test(nextLine)) {
                                break;
                            }
                            if (nextLineWithoutTabs.search(/[^ ]/) >= indent || !nextLine.trim()) { // Dedent if possible
                                itemContents += '\n' + nextLineWithoutTabs.slice(indent);
                            }
                            else {
                                // not enough indentation
                                if (blankLine) {
                                    break;
                                }
                                // paragraph continuation unless last line was a different block level element
                                if (line.replace(/\t/g, '    ').search(/[^ ]/) >= 4) { // indented code block
                                    break;
                                }
                                if (fencesBeginRegex.test(line)) {
                                    break;
                                }
                                if (headingBeginRegex.test(line)) {
                                    break;
                                }
                                if (hrRegex.test(line)) {
                                    break;
                                }
                                itemContents += '\n' + nextLine;
                            }
                            if (!blankLine && !nextLine.trim()) { // Check if current line is blank
                                blankLine = true;
                            }
                            raw += rawLine + '\n';
                            src = src.substring(rawLine.length + 1);
                            line = nextLineWithoutTabs.slice(indent);
                        }
                    }
                    if (!list.loose) {
                        // If the previous item ended with a blank line, the list is loose
                        if (endsWithBlankLine) {
                            list.loose = true;
                        }
                        else if (/\n[ \t]*\n[ \t]*$/.test(raw)) {
                            endsWithBlankLine = true;
                        }
                    }
                    let istask = null;
                    let ischecked;
                    // Check for task list items
                    if (this.options.gfm) {
                        istask = /^\[[ xX]\] /.exec(itemContents);
                        if (istask) {
                            ischecked = istask[0] !== '[ ] ';
                            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
                        }
                    }
                    list.items.push({
                        type: 'list_item',
                        raw,
                        task: !!istask,
                        checked: ischecked,
                        loose: false,
                        text: itemContents,
                        tokens: [],
                    });
                    list.raw += raw;
                }
                // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
                list.items[list.items.length - 1].raw = list.items[list.items.length - 1].raw.trimEnd();
                list.items[list.items.length - 1].text = list.items[list.items.length - 1].text.trimEnd();
                list.raw = list.raw.trimEnd();
                // Item child tokens handled here at end because we needed to have the final item to trim it first
                for (let i = 0; i < list.items.length; i++) {
                    this.lexer.state.top = false;
                    list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                    if (!list.loose) {
                        // Check if list should be loose
                        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
                        const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));
                        list.loose = hasMultipleLineBreaks;
                    }
                }
                // Set all items to loose if list is loose
                if (list.loose) {
                    for (let i = 0; i < list.items.length; i++) {
                        list.items[i].loose = true;
                    }
                }
                return list;
            }
        }
        html(src) {
            const cap = this.rules.block.html.exec(src);
            if (cap) {
                const token = {
                    type: 'html',
                    block: true,
                    raw: cap[0],
                    pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
                    text: cap[0],
                };
                return token;
            }
        }
        def(src) {
            const cap = this.rules.block.def.exec(src);
            if (cap) {
                const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
                const href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline.anyPunctuation, '$1') : '';
                const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : cap[3];
                return {
                    type: 'def',
                    tag,
                    raw: cap[0],
                    href,
                    title,
                };
            }
        }
        table(src) {
            const cap = this.rules.block.table.exec(src);
            if (!cap) {
                return;
            }
            if (!/[:|]/.test(cap[2])) {
                // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
                return;
            }
            const headers = splitCells(cap[1]);
            const aligns = cap[2].replace(/^\||\| *$/g, '').split('|');
            const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : [];
            const item = {
                type: 'table',
                raw: cap[0],
                header: [],
                align: [],
                rows: [],
            };
            if (headers.length !== aligns.length) {
                // header and align columns must be equal, rows can be different.
                return;
            }
            for (const align of aligns) {
                if (/^ *-+: *$/.test(align)) {
                    item.align.push('right');
                }
                else if (/^ *:-+: *$/.test(align)) {
                    item.align.push('center');
                }
                else if (/^ *:-+ *$/.test(align)) {
                    item.align.push('left');
                }
                else {
                    item.align.push(null);
                }
            }
            for (let i = 0; i < headers.length; i++) {
                item.header.push({
                    text: headers[i],
                    tokens: this.lexer.inline(headers[i]),
                    header: true,
                    align: item.align[i],
                });
            }
            for (const row of rows) {
                item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
                    return {
                        text: cell,
                        tokens: this.lexer.inline(cell),
                        header: false,
                        align: item.align[i],
                    };
                }));
            }
            return item;
        }
        lheading(src) {
            const cap = this.rules.block.lheading.exec(src);
            if (cap) {
                return {
                    type: 'heading',
                    raw: cap[0],
                    depth: cap[2].charAt(0) === '=' ? 1 : 2,
                    text: cap[1],
                    tokens: this.lexer.inline(cap[1]),
                };
            }
        }
        paragraph(src) {
            const cap = this.rules.block.paragraph.exec(src);
            if (cap) {
                const text = cap[1].charAt(cap[1].length - 1) === '\n'
                    ? cap[1].slice(0, -1)
                    : cap[1];
                return {
                    type: 'paragraph',
                    raw: cap[0],
                    text,
                    tokens: this.lexer.inline(text),
                };
            }
        }
        text(src) {
            const cap = this.rules.block.text.exec(src);
            if (cap) {
                return {
                    type: 'text',
                    raw: cap[0],
                    text: cap[0],
                    tokens: this.lexer.inline(cap[0]),
                };
            }
        }
        escape(src) {
            const cap = this.rules.inline.escape.exec(src);
            if (cap) {
                return {
                    type: 'escape',
                    raw: cap[0],
                    text: escape$1(cap[1]),
                };
            }
        }
        tag(src) {
            const cap = this.rules.inline.tag.exec(src);
            if (cap) {
                if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
                    this.lexer.state.inLink = true;
                }
                else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
                    this.lexer.state.inLink = false;
                }
                if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                    this.lexer.state.inRawBlock = true;
                }
                else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                    this.lexer.state.inRawBlock = false;
                }
                return {
                    type: 'html',
                    raw: cap[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    block: false,
                    text: cap[0],
                };
            }
        }
        link(src) {
            const cap = this.rules.inline.link.exec(src);
            if (cap) {
                const trimmedUrl = cap[2].trim();
                if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                    // commonmark requires matching angle brackets
                    if (!(/>$/.test(trimmedUrl))) {
                        return;
                    }
                    // ending angle bracket cannot be escaped
                    const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
                    if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
                        return;
                    }
                }
                else {
                    // find closing parenthesis
                    const lastParenIndex = findClosingBracket(cap[2], '()');
                    if (lastParenIndex > -1) {
                        const start = cap[0].indexOf('!') === 0 ? 5 : 4;
                        const linkLen = start + cap[1].length + lastParenIndex;
                        cap[2] = cap[2].substring(0, lastParenIndex);
                        cap[0] = cap[0].substring(0, linkLen).trim();
                        cap[3] = '';
                    }
                }
                let href = cap[2];
                let title = '';
                if (this.options.pedantic) {
                    // split pedantic href and title
                    const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                    if (link) {
                        href = link[1];
                        title = link[3];
                    }
                }
                else {
                    title = cap[3] ? cap[3].slice(1, -1) : '';
                }
                href = href.trim();
                if (/^</.test(href)) {
                    if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
                        // pedantic allows starting angle bracket without ending angle bracket
                        href = href.slice(1);
                    }
                    else {
                        href = href.slice(1, -1);
                    }
                }
                return outputLink(cap, {
                    href: href ? href.replace(this.rules.inline.anyPunctuation, '$1') : href,
                    title: title ? title.replace(this.rules.inline.anyPunctuation, '$1') : title,
                }, cap[0], this.lexer);
            }
        }
        reflink(src, links) {
            let cap;
            if ((cap = this.rules.inline.reflink.exec(src))
                || (cap = this.rules.inline.nolink.exec(src))) {
                const linkString = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                const link = links[linkString.toLowerCase()];
                if (!link) {
                    const text = cap[0].charAt(0);
                    return {
                        type: 'text',
                        raw: text,
                        text,
                    };
                }
                return outputLink(cap, link, cap[0], this.lexer);
            }
        }
        emStrong(src, maskedSrc, prevChar = '') {
            let match = this.rules.inline.emStrongLDelim.exec(src);
            if (!match)
                return;
            // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
            if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
                return;
            const nextChar = match[1] || match[2] || '';
            if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
                // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
                const lLength = [...match[0]].length - 1;
                let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
                const endReg = match[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                endReg.lastIndex = 0;
                // Clip maskedSrc to same section of string as src (move to lexer?)
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
                while ((match = endReg.exec(maskedSrc)) != null) {
                    rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                    if (!rDelim)
                        continue; // skip single * in __abc*abc__
                    rLength = [...rDelim].length;
                    if (match[3] || match[4]) { // found another Left Delim
                        delimTotal += rLength;
                        continue;
                    }
                    else if (match[5] || match[6]) { // either Left or Right Delim
                        if (lLength % 3 && !((lLength + rLength) % 3)) {
                            midDelimTotal += rLength;
                            continue; // CommonMark Emphasis Rules 9-10
                        }
                    }
                    delimTotal -= rLength;
                    if (delimTotal > 0)
                        continue; // Haven't found enough closing delimiters
                    // Remove extra characters. *a*** -> *a*
                    rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
                    // char length can be >1 for unicode characters;
                    const lastCharLength = [...match[0]][0].length;
                    const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
                    // Create `em` if smallest delimiter has odd char count. *a***
                    if (Math.min(lLength, rLength) % 2) {
                        const text = raw.slice(1, -1);
                        return {
                            type: 'em',
                            raw,
                            text,
                            tokens: this.lexer.inlineTokens(text),
                        };
                    }
                    // Create 'strong' if smallest delimiter has even char count. **a***
                    const text = raw.slice(2, -2);
                    return {
                        type: 'strong',
                        raw,
                        text,
                        tokens: this.lexer.inlineTokens(text),
                    };
                }
            }
        }
        codespan(src) {
            const cap = this.rules.inline.code.exec(src);
            if (cap) {
                let text = cap[2].replace(/\n/g, ' ');
                const hasNonSpaceChars = /[^ ]/.test(text);
                const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
                if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
                    text = text.substring(1, text.length - 1);
                }
                text = escape$1(text, true);
                return {
                    type: 'codespan',
                    raw: cap[0],
                    text,
                };
            }
        }
        br(src) {
            const cap = this.rules.inline.br.exec(src);
            if (cap) {
                return {
                    type: 'br',
                    raw: cap[0],
                };
            }
        }
        del(src) {
            const cap = this.rules.inline.del.exec(src);
            if (cap) {
                return {
                    type: 'del',
                    raw: cap[0],
                    text: cap[2],
                    tokens: this.lexer.inlineTokens(cap[2]),
                };
            }
        }
        autolink(src) {
            const cap = this.rules.inline.autolink.exec(src);
            if (cap) {
                let text, href;
                if (cap[2] === '@') {
                    text = escape$1(cap[1]);
                    href = 'mailto:' + text;
                }
                else {
                    text = escape$1(cap[1]);
                    href = text;
                }
                return {
                    type: 'link',
                    raw: cap[0],
                    text,
                    href,
                    tokens: [
                        {
                            type: 'text',
                            raw: text,
                            text,
                        },
                    ],
                };
            }
        }
        url(src) {
            let cap;
            if (cap = this.rules.inline.url.exec(src)) {
                let text, href;
                if (cap[2] === '@') {
                    text = escape$1(cap[0]);
                    href = 'mailto:' + text;
                }
                else {
                    // do extended autolink path validation
                    let prevCapZero;
                    do {
                        prevCapZero = cap[0];
                        cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? '';
                    } while (prevCapZero !== cap[0]);
                    text = escape$1(cap[0]);
                    if (cap[1] === 'www.') {
                        href = 'http://' + cap[0];
                    }
                    else {
                        href = cap[0];
                    }
                }
                return {
                    type: 'link',
                    raw: cap[0],
                    text,
                    href,
                    tokens: [
                        {
                            type: 'text',
                            raw: text,
                            text,
                        },
                    ],
                };
            }
        }
        inlineText(src) {
            const cap = this.rules.inline.text.exec(src);
            if (cap) {
                let text;
                if (this.lexer.state.inRawBlock) {
                    text = cap[0];
                }
                else {
                    text = escape$1(cap[0]);
                }
                return {
                    type: 'text',
                    raw: cap[0],
                    text,
                };
            }
        }
    }

    /**
     * Block-Level Grammar
     */
    const newline = /^(?:[ \t]*(?:\n|$))+/;
    const blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
    const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
    const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
    const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
    const bullet = /(?:[*+-]|\d{1,9}[.)])/;
    const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/)
        .replace(/bull/g, bullet) // lists can interrupt
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/) // indented code blocks can interrupt
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/) // fenced code blocks can interrupt
        .replace(/blockquote/g, / {0,3}>/) // blockquote can interrupt
        .replace(/heading/g, / {0,3}#{1,6}/) // ATX heading can interrupt
        .replace(/html/g, / {0,3}<[^\n>]+>\n/) // block html can interrupt
        .getRegex();
    const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
    const blockText = /^[^\n]+/;
    const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    const def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/)
        .replace('label', _blockLabel)
        .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex();
    const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, bullet)
        .getRegex();
    const _tag = 'address|article|aside|base|basefont|blockquote|body|caption'
        + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
        + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
        + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
        + '|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title'
        + '|tr|track|ul';
    const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
    const html = edit('^ {0,3}(?:' // optional indentation
        + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
        + '|comment[^\\n]*(\\n+|$)' // (2)
        + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
        + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
        + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
        + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)' // (6)
        + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)' // (7) open tag
        + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)' // (7) closing tag
        + ')', 'i')
        .replace('comment', _comment)
        .replace('tag', _tag)
        .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex();
    const paragraph = edit(_paragraph)
        .replace('hr', hr)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', _tag) // pars can be interrupted by type (6) html blocks
        .getRegex();
    const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
        .replace('paragraph', paragraph)
        .getRegex();
    /**
     * Normal Block Grammar
     */
    const blockNormal = {
        blockquote,
        code: blockCode,
        def,
        fences,
        heading,
        hr,
        html,
        lheading,
        list,
        newline,
        paragraph,
        table: noopTest,
        text: blockText,
    };
    /**
     * GFM Block Grammar
     */
    const gfmTable = edit('^ *([^\\n ].*)\\n' // Header
        + ' {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)' // Align
        + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)') // Cells
        .replace('hr', hr)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('blockquote', ' {0,3}>')
        .replace('code', '(?: {4}| {0,3}\t)[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', _tag) // tables can be interrupted by type (6) html blocks
        .getRegex();
    const blockGfm = {
        ...blockNormal,
        table: gfmTable,
        paragraph: edit(_paragraph)
            .replace('hr', hr)
            .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
            .replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
            .replace('table', gfmTable) // interrupt paragraphs with table
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
            .replace('tag', _tag) // pars can be interrupted by type (6) html blocks
            .getRegex(),
    };
    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */
    const blockPedantic = {
        ...blockNormal,
        html: edit('^ *(?:comment *(?:\\n|\\s*$)'
            + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
            + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
            .replace('comment', _comment)
            .replace(/tag/g, '(?!(?:'
            + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
            + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
            + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest, // fences not supported
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: edit(_paragraph)
            .replace('hr', hr)
            .replace('heading', ' *#{1,6} *[^\n]')
            .replace('lheading', lheading)
            .replace('|table', '')
            .replace('blockquote', ' {0,3}>')
            .replace('|fences', '')
            .replace('|list', '')
            .replace('|html', '')
            .replace('|tag', '')
            .getRegex(),
    };
    /**
     * Inline-Level Grammar
     */
    const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
    const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
    const br = /^( {2,}|\\)\n(?!\s*$)/;
    const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
    // list of unicode punctuation marks, plus any missing characters from CommonMark spec
    const _punctuation = '\\p{P}\\p{S}';
    const punctuation = edit(/^((?![*_])[\spunctuation])/, 'u')
        .replace(/punctuation/g, _punctuation).getRegex();
    // sequences em should skip over [title](link), `code`, <html>
    const blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
    const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, 'u')
        .replace(/punct/g, _punctuation)
        .getRegex();
    const emStrongRDelimAst = edit('^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)' // Skip orphan inside strong
        + '|[^*]+(?=[^*])' // Consume to delim
        + '|(?!\\*)[punct](\\*+)(?=[\\s]|$)' // (1) #*** can only be a Right Delimiter
        + '|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)' // (2) a***#, a*** can only be a Right Delimiter
        + '|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])' // (3) #***a, ***a can only be Left Delimiter
        + '|[\\s](\\*+)(?!\\*)(?=[punct])' // (4) ***# can only be Left Delimiter
        + '|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])' // (5) #***# can be either Left or Right Delimiter
        + '|[^punct\\s](\\*+)(?=[^punct\\s])', 'gu') // (6) a***a can be either Left or Right Delimiter
        .replace(/punct/g, _punctuation)
        .getRegex();
    // (6) Not allowed for _
    const emStrongRDelimUnd = edit('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)' // Skip orphan inside strong
        + '|[^_]+(?=[^_])' // Consume to delim
        + '|(?!_)[punct](_+)(?=[\\s]|$)' // (1) #___ can only be a Right Delimiter
        + '|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)' // (2) a___#, a___ can only be a Right Delimiter
        + '|(?!_)[punct\\s](_+)(?=[^punct\\s])' // (3) #___a, ___a can only be Left Delimiter
        + '|[\\s](_+)(?!_)(?=[punct])' // (4) ___# can only be Left Delimiter
        + '|(?!_)[punct](_+)(?!_)(?=[punct])', 'gu') // (5) #___# can be either Left or Right Delimiter
        .replace(/punct/g, _punctuation)
        .getRegex();
    const anyPunctuation = edit(/\\([punct])/, 'gu')
        .replace(/punct/g, _punctuation)
        .getRegex();
    const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace('email', /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/)
        .getRegex();
    const _inlineComment = edit(_comment).replace('(?:-->|$)', '-->').getRegex();
    const tag = edit('^comment'
        + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
        + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
        + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
        + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
        + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>') // CDATA section
        .replace('comment', _inlineComment)
        .replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
        .getRegex();
    const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
        .replace('label', _inlineLabel)
        .replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
        .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex();
    const reflink = edit(/^!?\[(label)\]\[(ref)\]/)
        .replace('label', _inlineLabel)
        .replace('ref', _blockLabel)
        .getRegex();
    const nolink = edit(/^!?\[(ref)\](?:\[\])?/)
        .replace('ref', _blockLabel)
        .getRegex();
    const reflinkSearch = edit('reflink|nolink(?!\\()', 'g')
        .replace('reflink', reflink)
        .replace('nolink', nolink)
        .getRegex();
    /**
     * Normal Inline Grammar
     */
    const inlineNormal = {
        _backpedal: noopTest, // only used for GFM url
        anyPunctuation,
        autolink,
        blockSkip,
        br,
        code: inlineCode,
        del: noopTest,
        emStrongLDelim,
        emStrongRDelimAst,
        emStrongRDelimUnd,
        escape,
        link,
        nolink,
        punctuation,
        reflink,
        reflinkSearch,
        tag,
        text: inlineText,
        url: noopTest,
    };
    /**
     * Pedantic Inline Grammar
     */
    const inlinePedantic = {
        ...inlineNormal,
        link: edit(/^!?\[(label)\]\((.*?)\)/)
            .replace('label', _inlineLabel)
            .getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace('label', _inlineLabel)
            .getRegex(),
    };
    /**
     * GFM Inline Grammar
     */
    const inlineGfm = {
        ...inlineNormal,
        escape: edit(escape).replace('])', '~|])').getRegex(),
        url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
            .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
            .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    };
    /**
     * GFM + Line Breaks Inline Grammar
     */
    const inlineBreaks = {
        ...inlineGfm,
        br: edit(br).replace('{2,}', '*').getRegex(),
        text: edit(inlineGfm.text)
            .replace('\\b_', '\\b_| {2,}\\n')
            .replace(/\{2,\}/g, '*')
            .getRegex(),
    };
    /**
     * exports
     */
    const block = {
        normal: blockNormal,
        gfm: blockGfm,
        pedantic: blockPedantic,
    };
    const inline = {
        normal: inlineNormal,
        gfm: inlineGfm,
        breaks: inlineBreaks,
        pedantic: inlinePedantic,
    };

    /**
     * Block Lexer
     */
    class _Lexer {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(options) {
            // TokenList cannot be created in one go
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || _defaults;
            this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            this.tokenizer.lexer = this;
            this.inlineQueue = [];
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true,
            };
            const rules = {
                block: block.normal,
                inline: inline.normal,
            };
            if (this.options.pedantic) {
                rules.block = block.pedantic;
                rules.inline = inline.pedantic;
            }
            else if (this.options.gfm) {
                rules.block = block.gfm;
                if (this.options.breaks) {
                    rules.inline = inline.breaks;
                }
                else {
                    rules.inline = inline.gfm;
                }
            }
            this.tokenizer.rules = rules;
        }
        /**
         * Expose Rules
         */
        static get rules() {
            return {
                block,
                inline,
            };
        }
        /**
         * Static Lex Method
         */
        static lex(src, options) {
            const lexer = new _Lexer(options);
            return lexer.lex(src);
        }
        /**
         * Static Lex Inline Method
         */
        static lexInline(src, options) {
            const lexer = new _Lexer(options);
            return lexer.inlineTokens(src);
        }
        /**
         * Preprocessing
         */
        lex(src) {
            src = src
                .replace(/\r\n|\r/g, '\n');
            this.blockTokens(src, this.tokens);
            for (let i = 0; i < this.inlineQueue.length; i++) {
                const next = this.inlineQueue[i];
                this.inlineTokens(next.src, next.tokens);
            }
            this.inlineQueue = [];
            return this.tokens;
        }
        blockTokens(src, tokens = [], lastParagraphClipped = false) {
            if (this.options.pedantic) {
                src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
            }
            let token;
            let lastToken;
            let cutSrc;
            while (src) {
                if (this.options.extensions
                    && this.options.extensions.block
                    && this.options.extensions.block.some((extTokenizer) => {
                        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
                            src = src.substring(token.raw.length);
                            tokens.push(token);
                            return true;
                        }
                        return false;
                    })) {
                    continue;
                }
                // newline
                if (token = this.tokenizer.space(src)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.length === 1 && tokens.length > 0) {
                        // if there's a single \n as a spacer, it's terminating the last line,
                        // so move it there so that we don't get unnecessary paragraph tags
                        tokens[tokens.length - 1].raw += '\n';
                    }
                    else {
                        tokens.push(token);
                    }
                    continue;
                }
                // code
                if (token = this.tokenizer.code(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    // An indented code block cannot interrupt a paragraph.
                    if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    }
                    else {
                        tokens.push(token);
                    }
                    continue;
                }
                // fences
                if (token = this.tokenizer.fences(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // heading
                if (token = this.tokenizer.heading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // hr
                if (token = this.tokenizer.hr(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // blockquote
                if (token = this.tokenizer.blockquote(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // list
                if (token = this.tokenizer.list(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // html
                if (token = this.tokenizer.html(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // def
                if (token = this.tokenizer.def(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.raw;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    }
                    else if (!this.tokens.links[token.tag]) {
                        this.tokens.links[token.tag] = {
                            href: token.href,
                            title: token.title,
                        };
                    }
                    continue;
                }
                // table (gfm)
                if (token = this.tokenizer.table(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // lheading
                if (token = this.tokenizer.lheading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // top-level paragraph
                // prevent paragraph consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startBlock) {
                    let startIndex = Infinity;
                    const tempSrc = src.slice(1);
                    let tempStart;
                    this.options.extensions.startBlock.forEach((getStartIndex) => {
                        tempStart = getStartIndex.call({ lexer: this }, tempSrc);
                        if (typeof tempStart === 'number' && tempStart >= 0) {
                            startIndex = Math.min(startIndex, tempStart);
                        }
                    });
                    if (startIndex < Infinity && startIndex >= 0) {
                        cutSrc = src.substring(0, startIndex + 1);
                    }
                }
                if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                    lastToken = tokens[tokens.length - 1];
                    if (lastParagraphClipped && lastToken?.type === 'paragraph') {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    }
                    else {
                        tokens.push(token);
                    }
                    lastParagraphClipped = (cutSrc.length !== src.length);
                    src = src.substring(token.raw.length);
                    continue;
                }
                // text
                if (token = this.tokenizer.text(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === 'text') {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    }
                    else {
                        tokens.push(token);
                    }
                    continue;
                }
                if (src) {
                    const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
            this.state.top = true;
            return tokens;
        }
        inline(src, tokens = []) {
            this.inlineQueue.push({ src, tokens });
            return tokens;
        }
        /**
         * Lexing/Compiling
         */
        inlineTokens(src, tokens = []) {
            let token, lastToken, cutSrc;
            // String with links masked to avoid interference with em and strong
            let maskedSrc = src;
            let match;
            let keepPrevChar, prevChar;
            // Mask out reflinks
            if (this.tokens.links) {
                const links = Object.keys(this.tokens.links);
                if (links.length > 0) {
                    while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
                        if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                            maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                        }
                    }
                }
            }
            // Mask out other blocks
            while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
                maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            }
            // Mask out escaped characters
            while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
                maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            }
            while (src) {
                if (!keepPrevChar) {
                    prevChar = '';
                }
                keepPrevChar = false;
                // extensions
                if (this.options.extensions
                    && this.options.extensions.inline
                    && this.options.extensions.inline.some((extTokenizer) => {
                        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
                            src = src.substring(token.raw.length);
                            tokens.push(token);
                            return true;
                        }
                        return false;
                    })) {
                    continue;
                }
                // escape
                if (token = this.tokenizer.escape(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // tag
                if (token = this.tokenizer.tag(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    }
                    else {
                        tokens.push(token);
                    }
                    continue;
                }
                // link
                if (token = this.tokenizer.link(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // reflink, nolink
                if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    }
                    else {
                        tokens.push(token);
                    }
                    continue;
                }
                // em & strong
                if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // code
                if (token = this.tokenizer.codespan(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // br
                if (token = this.tokenizer.br(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // del (gfm)
                if (token = this.tokenizer.del(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // autolink
                if (token = this.tokenizer.autolink(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // url (gfm)
                if (!this.state.inLink && (token = this.tokenizer.url(src))) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // text
                // prevent inlineText consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startInline) {
                    let startIndex = Infinity;
                    const tempSrc = src.slice(1);
                    let tempStart;
                    this.options.extensions.startInline.forEach((getStartIndex) => {
                        tempStart = getStartIndex.call({ lexer: this }, tempSrc);
                        if (typeof tempStart === 'number' && tempStart >= 0) {
                            startIndex = Math.min(startIndex, tempStart);
                        }
                    });
                    if (startIndex < Infinity && startIndex >= 0) {
                        cutSrc = src.substring(0, startIndex + 1);
                    }
                }
                if (token = this.tokenizer.inlineText(cutSrc)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
                        prevChar = token.raw.slice(-1);
                    }
                    keepPrevChar = true;
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    }
                    else {
                        tokens.push(token);
                    }
                    continue;
                }
                if (src) {
                    const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
            return tokens;
        }
    }

    /**
     * Renderer
     */
    class _Renderer {
        options;
        parser; // set by the parser
        constructor(options) {
            this.options = options || _defaults;
        }
        space(token) {
            return '';
        }
        code({ text, lang, escaped }) {
            const langString = (lang || '').match(/^\S*/)?.[0];
            const code = text.replace(/\n$/, '') + '\n';
            if (!langString) {
                return '<pre><code>'
                    + (escaped ? code : escape$1(code, true))
                    + '</code></pre>\n';
            }
            return '<pre><code class="language-'
                + escape$1(langString)
                + '">'
                + (escaped ? code : escape$1(code, true))
                + '</code></pre>\n';
        }
        blockquote({ tokens }) {
            const body = this.parser.parse(tokens);
            return `<blockquote>\n${body}</blockquote>\n`;
        }
        html({ text }) {
            return text;
        }
        heading({ tokens, depth }) {
            return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>\n`;
        }
        hr(token) {
            return '<hr>\n';
        }
        list(token) {
            const ordered = token.ordered;
            const start = token.start;
            let body = '';
            for (let j = 0; j < token.items.length; j++) {
                const item = token.items[j];
                body += this.listitem(item);
            }
            const type = ordered ? 'ol' : 'ul';
            const startAttr = (ordered && start !== 1) ? (' start="' + start + '"') : '';
            return '<' + type + startAttr + '>\n' + body + '</' + type + '>\n';
        }
        listitem(item) {
            let itemBody = '';
            if (item.task) {
                const checkbox = this.checkbox({ checked: !!item.checked });
                if (item.loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                            item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                        }
                    }
                    else {
                        item.tokens.unshift({
                            type: 'text',
                            raw: checkbox + ' ',
                            text: checkbox + ' ',
                        });
                    }
                }
                else {
                    itemBody += checkbox + ' ';
                }
            }
            itemBody += this.parser.parse(item.tokens, !!item.loose);
            return `<li>${itemBody}</li>\n`;
        }
        checkbox({ checked }) {
            return '<input '
                + (checked ? 'checked="" ' : '')
                + 'disabled="" type="checkbox">';
        }
        paragraph({ tokens }) {
            return `<p>${this.parser.parseInline(tokens)}</p>\n`;
        }
        table(token) {
            let header = '';
            // header
            let cell = '';
            for (let j = 0; j < token.header.length; j++) {
                cell += this.tablecell(token.header[j]);
            }
            header += this.tablerow({ text: cell });
            let body = '';
            for (let j = 0; j < token.rows.length; j++) {
                const row = token.rows[j];
                cell = '';
                for (let k = 0; k < row.length; k++) {
                    cell += this.tablecell(row[k]);
                }
                body += this.tablerow({ text: cell });
            }
            if (body)
                body = `<tbody>${body}</tbody>`;
            return '<table>\n'
                + '<thead>\n'
                + header
                + '</thead>\n'
                + body
                + '</table>\n';
        }
        tablerow({ text }) {
            return `<tr>\n${text}</tr>\n`;
        }
        tablecell(token) {
            const content = this.parser.parseInline(token.tokens);
            const type = token.header ? 'th' : 'td';
            const tag = token.align
                ? `<${type} align="${token.align}">`
                : `<${type}>`;
            return tag + content + `</${type}>\n`;
        }
        /**
         * span level renderer
         */
        strong({ tokens }) {
            return `<strong>${this.parser.parseInline(tokens)}</strong>`;
        }
        em({ tokens }) {
            return `<em>${this.parser.parseInline(tokens)}</em>`;
        }
        codespan({ text }) {
            return `<code>${text}</code>`;
        }
        br(token) {
            return '<br>';
        }
        del({ tokens }) {
            return `<del>${this.parser.parseInline(tokens)}</del>`;
        }
        link({ href, title, tokens }) {
            const text = this.parser.parseInline(tokens);
            const cleanHref = cleanUrl(href);
            if (cleanHref === null) {
                return text;
            }
            href = cleanHref;
            let out = '<a href="' + href + '"';
            if (title) {
                out += ' title="' + title + '"';
            }
            out += '>' + text + '</a>';
            return out;
        }
        image({ href, title, text }) {
            const cleanHref = cleanUrl(href);
            if (cleanHref === null) {
                return text;
            }
            href = cleanHref;
            let out = `<img src="${href}" alt="${text}"`;
            if (title) {
                out += ` title="${title}"`;
            }
            out += '>';
            return out;
        }
        text(token) {
            return 'tokens' in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
        }
    }

    /**
     * TextRenderer
     * returns only the textual part of the token
     */
    class _TextRenderer {
        // no need for block level renderers
        strong({ text }) {
            return text;
        }
        em({ text }) {
            return text;
        }
        codespan({ text }) {
            return text;
        }
        del({ text }) {
            return text;
        }
        html({ text }) {
            return text;
        }
        text({ text }) {
            return text;
        }
        link({ text }) {
            return '' + text;
        }
        image({ text }) {
            return '' + text;
        }
        br() {
            return '';
        }
    }

    /**
     * Parsing & Compiling
     */
    class _Parser {
        options;
        renderer;
        textRenderer;
        constructor(options) {
            this.options = options || _defaults;
            this.options.renderer = this.options.renderer || new _Renderer();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.renderer.parser = this;
            this.textRenderer = new _TextRenderer();
        }
        /**
         * Static Parse Method
         */
        static parse(tokens, options) {
            const parser = new _Parser(options);
            return parser.parse(tokens);
        }
        /**
         * Static Parse Inline Method
         */
        static parseInline(tokens, options) {
            const parser = new _Parser(options);
            return parser.parseInline(tokens);
        }
        /**
         * Parse Loop
         */
        parse(tokens, top = true) {
            let out = '';
            for (let i = 0; i < tokens.length; i++) {
                const anyToken = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
                    const genericToken = anyToken;
                    const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
                    if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(genericToken.type)) {
                        out += ret || '';
                        continue;
                    }
                }
                const token = anyToken;
                switch (token.type) {
                    case 'space': {
                        out += this.renderer.space(token);
                        continue;
                    }
                    case 'hr': {
                        out += this.renderer.hr(token);
                        continue;
                    }
                    case 'heading': {
                        out += this.renderer.heading(token);
                        continue;
                    }
                    case 'code': {
                        out += this.renderer.code(token);
                        continue;
                    }
                    case 'table': {
                        out += this.renderer.table(token);
                        continue;
                    }
                    case 'blockquote': {
                        out += this.renderer.blockquote(token);
                        continue;
                    }
                    case 'list': {
                        out += this.renderer.list(token);
                        continue;
                    }
                    case 'html': {
                        out += this.renderer.html(token);
                        continue;
                    }
                    case 'paragraph': {
                        out += this.renderer.paragraph(token);
                        continue;
                    }
                    case 'text': {
                        let textToken = token;
                        let body = this.renderer.text(textToken);
                        while (i + 1 < tokens.length && tokens[i + 1].type === 'text') {
                            textToken = tokens[++i];
                            body += '\n' + this.renderer.text(textToken);
                        }
                        if (top) {
                            out += this.renderer.paragraph({
                                type: 'paragraph',
                                raw: body,
                                text: body,
                                tokens: [{ type: 'text', raw: body, text: body }],
                            });
                        }
                        else {
                            out += body;
                        }
                        continue;
                    }
                    default: {
                        const errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return '';
                        }
                        else {
                            throw new Error(errMsg);
                        }
                    }
                }
            }
            return out;
        }
        /**
         * Parse Inline Tokens
         */
        parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            let out = '';
            for (let i = 0; i < tokens.length; i++) {
                const anyToken = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
                    const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
                    if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(anyToken.type)) {
                        out += ret || '';
                        continue;
                    }
                }
                const token = anyToken;
                switch (token.type) {
                    case 'escape': {
                        out += renderer.text(token);
                        break;
                    }
                    case 'html': {
                        out += renderer.html(token);
                        break;
                    }
                    case 'link': {
                        out += renderer.link(token);
                        break;
                    }
                    case 'image': {
                        out += renderer.image(token);
                        break;
                    }
                    case 'strong': {
                        out += renderer.strong(token);
                        break;
                    }
                    case 'em': {
                        out += renderer.em(token);
                        break;
                    }
                    case 'codespan': {
                        out += renderer.codespan(token);
                        break;
                    }
                    case 'br': {
                        out += renderer.br(token);
                        break;
                    }
                    case 'del': {
                        out += renderer.del(token);
                        break;
                    }
                    case 'text': {
                        out += renderer.text(token);
                        break;
                    }
                    default: {
                        const errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return '';
                        }
                        else {
                            throw new Error(errMsg);
                        }
                    }
                }
            }
            return out;
        }
    }

    class _Hooks {
        options;
        block;
        constructor(options) {
            this.options = options || _defaults;
        }
        static passThroughHooks = new Set([
            'preprocess',
            'postprocess',
            'processAllTokens',
        ]);
        /**
         * Process markdown before marked
         */
        preprocess(markdown) {
            return markdown;
        }
        /**
         * Process HTML after marked is finished
         */
        postprocess(html) {
            return html;
        }
        /**
         * Process all tokens before walk tokens
         */
        processAllTokens(tokens) {
            return tokens;
        }
        /**
         * Provide function to tokenize markdown
         */
        provideLexer() {
            return this.block ? _Lexer.lex : _Lexer.lexInline;
        }
        /**
         * Provide function to parse tokens
         */
        provideParser() {
            return this.block ? _Parser.parse : _Parser.parseInline;
        }
    }

    class Marked {
        defaults = _getDefaults();
        options = this.setOptions;
        parse = this.parseMarkdown(true);
        parseInline = this.parseMarkdown(false);
        Parser = _Parser;
        Renderer = _Renderer;
        TextRenderer = _TextRenderer;
        Lexer = _Lexer;
        Tokenizer = _Tokenizer;
        Hooks = _Hooks;
        constructor(...args) {
            this.use(...args);
        }
        /**
         * Run callback for every token
         */
        walkTokens(tokens, callback) {
            let values = [];
            for (const token of tokens) {
                values = values.concat(callback.call(this, token));
                switch (token.type) {
                    case 'table': {
                        const tableToken = token;
                        for (const cell of tableToken.header) {
                            values = values.concat(this.walkTokens(cell.tokens, callback));
                        }
                        for (const row of tableToken.rows) {
                            for (const cell of row) {
                                values = values.concat(this.walkTokens(cell.tokens, callback));
                            }
                        }
                        break;
                    }
                    case 'list': {
                        const listToken = token;
                        values = values.concat(this.walkTokens(listToken.items, callback));
                        break;
                    }
                    default: {
                        const genericToken = token;
                        if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
                            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                                const tokens = genericToken[childTokens].flat(Infinity);
                                values = values.concat(this.walkTokens(tokens, callback));
                            });
                        }
                        else if (genericToken.tokens) {
                            values = values.concat(this.walkTokens(genericToken.tokens, callback));
                        }
                    }
                }
            }
            return values;
        }
        use(...args) {
            const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
            args.forEach((pack) => {
                // copy options to new object
                const opts = { ...pack };
                // set async to true if it was set to true before
                opts.async = this.defaults.async || opts.async || false;
                // ==-- Parse "addon" extensions --== //
                if (pack.extensions) {
                    pack.extensions.forEach((ext) => {
                        if (!ext.name) {
                            throw new Error('extension name required');
                        }
                        if ('renderer' in ext) { // Renderer extensions
                            const prevRenderer = extensions.renderers[ext.name];
                            if (prevRenderer) {
                                // Replace extension with func to run new extension but fall back if false
                                extensions.renderers[ext.name] = function (...args) {
                                    let ret = ext.renderer.apply(this, args);
                                    if (ret === false) {
                                        ret = prevRenderer.apply(this, args);
                                    }
                                    return ret;
                                };
                            }
                            else {
                                extensions.renderers[ext.name] = ext.renderer;
                            }
                        }
                        if ('tokenizer' in ext) { // Tokenizer Extensions
                            if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
                                throw new Error("extension level must be 'block' or 'inline'");
                            }
                            const extLevel = extensions[ext.level];
                            if (extLevel) {
                                extLevel.unshift(ext.tokenizer);
                            }
                            else {
                                extensions[ext.level] = [ext.tokenizer];
                            }
                            if (ext.start) { // Function to check for start of token
                                if (ext.level === 'block') {
                                    if (extensions.startBlock) {
                                        extensions.startBlock.push(ext.start);
                                    }
                                    else {
                                        extensions.startBlock = [ext.start];
                                    }
                                }
                                else if (ext.level === 'inline') {
                                    if (extensions.startInline) {
                                        extensions.startInline.push(ext.start);
                                    }
                                    else {
                                        extensions.startInline = [ext.start];
                                    }
                                }
                            }
                        }
                        if ('childTokens' in ext && ext.childTokens) { // Child tokens to be visited by walkTokens
                            extensions.childTokens[ext.name] = ext.childTokens;
                        }
                    });
                    opts.extensions = extensions;
                }
                // ==-- Parse "overwrite" extensions --== //
                if (pack.renderer) {
                    const renderer = this.defaults.renderer || new _Renderer(this.defaults);
                    for (const prop in pack.renderer) {
                        if (!(prop in renderer)) {
                            throw new Error(`renderer '${prop}' does not exist`);
                        }
                        if (['options', 'parser'].includes(prop)) {
                            // ignore options property
                            continue;
                        }
                        const rendererProp = prop;
                        const rendererFunc = pack.renderer[rendererProp];
                        const prevRenderer = renderer[rendererProp];
                        // Replace renderer with func to run extension, but fall back if false
                        renderer[rendererProp] = (...args) => {
                            let ret = rendererFunc.apply(renderer, args);
                            if (ret === false) {
                                ret = prevRenderer.apply(renderer, args);
                            }
                            return ret || '';
                        };
                    }
                    opts.renderer = renderer;
                }
                if (pack.tokenizer) {
                    const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
                    for (const prop in pack.tokenizer) {
                        if (!(prop in tokenizer)) {
                            throw new Error(`tokenizer '${prop}' does not exist`);
                        }
                        if (['options', 'rules', 'lexer'].includes(prop)) {
                            // ignore options, rules, and lexer properties
                            continue;
                        }
                        const tokenizerProp = prop;
                        const tokenizerFunc = pack.tokenizer[tokenizerProp];
                        const prevTokenizer = tokenizer[tokenizerProp];
                        // Replace tokenizer with func to run extension, but fall back if false
                        // @ts-expect-error cannot type tokenizer function dynamically
                        tokenizer[tokenizerProp] = (...args) => {
                            let ret = tokenizerFunc.apply(tokenizer, args);
                            if (ret === false) {
                                ret = prevTokenizer.apply(tokenizer, args);
                            }
                            return ret;
                        };
                    }
                    opts.tokenizer = tokenizer;
                }
                // ==-- Parse Hooks extensions --== //
                if (pack.hooks) {
                    const hooks = this.defaults.hooks || new _Hooks();
                    for (const prop in pack.hooks) {
                        if (!(prop in hooks)) {
                            throw new Error(`hook '${prop}' does not exist`);
                        }
                        if (['options', 'block'].includes(prop)) {
                            // ignore options and block properties
                            continue;
                        }
                        const hooksProp = prop;
                        const hooksFunc = pack.hooks[hooksProp];
                        const prevHook = hooks[hooksProp];
                        if (_Hooks.passThroughHooks.has(prop)) {
                            // @ts-expect-error cannot type hook function dynamically
                            hooks[hooksProp] = (arg) => {
                                if (this.defaults.async) {
                                    return Promise.resolve(hooksFunc.call(hooks, arg)).then(ret => {
                                        return prevHook.call(hooks, ret);
                                    });
                                }
                                const ret = hooksFunc.call(hooks, arg);
                                return prevHook.call(hooks, ret);
                            };
                        }
                        else {
                            // @ts-expect-error cannot type hook function dynamically
                            hooks[hooksProp] = (...args) => {
                                let ret = hooksFunc.apply(hooks, args);
                                if (ret === false) {
                                    ret = prevHook.apply(hooks, args);
                                }
                                return ret;
                            };
                        }
                    }
                    opts.hooks = hooks;
                }
                // ==-- Parse WalkTokens extensions --== //
                if (pack.walkTokens) {
                    const walkTokens = this.defaults.walkTokens;
                    const packWalktokens = pack.walkTokens;
                    opts.walkTokens = function (token) {
                        let values = [];
                        values.push(packWalktokens.call(this, token));
                        if (walkTokens) {
                            values = values.concat(walkTokens.call(this, token));
                        }
                        return values;
                    };
                }
                this.defaults = { ...this.defaults, ...opts };
            });
            return this;
        }
        setOptions(opt) {
            this.defaults = { ...this.defaults, ...opt };
            return this;
        }
        lexer(src, options) {
            return _Lexer.lex(src, options ?? this.defaults);
        }
        parser(tokens, options) {
            return _Parser.parse(tokens, options ?? this.defaults);
        }
        parseMarkdown(blockType) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parse = (src, options) => {
                const origOpt = { ...options };
                const opt = { ...this.defaults, ...origOpt };
                const throwError = this.onError(!!opt.silent, !!opt.async);
                // throw error if an extension set async to true but parse was called with async: false
                if (this.defaults.async === true && origOpt.async === false) {
                    return throwError(new Error('marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.'));
                }
                // throw error in case of non string input
                if (typeof src === 'undefined' || src === null) {
                    return throwError(new Error('marked(): input parameter is undefined or null'));
                }
                if (typeof src !== 'string') {
                    return throwError(new Error('marked(): input parameter is of type '
                        + Object.prototype.toString.call(src) + ', string expected'));
                }
                if (opt.hooks) {
                    opt.hooks.options = opt;
                    opt.hooks.block = blockType;
                }
                const lexer = opt.hooks ? opt.hooks.provideLexer() : (blockType ? _Lexer.lex : _Lexer.lexInline);
                const parser = opt.hooks ? opt.hooks.provideParser() : (blockType ? _Parser.parse : _Parser.parseInline);
                if (opt.async) {
                    return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src)
                        .then(src => lexer(src, opt))
                        .then(tokens => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens)
                        .then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens)
                        .then(tokens => parser(tokens, opt))
                        .then(html => opt.hooks ? opt.hooks.postprocess(html) : html)
                        .catch(throwError);
                }
                try {
                    if (opt.hooks) {
                        src = opt.hooks.preprocess(src);
                    }
                    let tokens = lexer(src, opt);
                    if (opt.hooks) {
                        tokens = opt.hooks.processAllTokens(tokens);
                    }
                    if (opt.walkTokens) {
                        this.walkTokens(tokens, opt.walkTokens);
                    }
                    let html = parser(tokens, opt);
                    if (opt.hooks) {
                        html = opt.hooks.postprocess(html);
                    }
                    return html;
                }
                catch (e) {
                    return throwError(e);
                }
            };
            return parse;
        }
        onError(silent, async) {
            return (e) => {
                e.message += '\nPlease report this to https://github.com/markedjs/marked.';
                if (silent) {
                    const msg = '<p>An error occurred:</p><pre>'
                        + escape$1(e.message + '', true)
                        + '</pre>';
                    if (async) {
                        return Promise.resolve(msg);
                    }
                    return msg;
                }
                if (async) {
                    return Promise.reject(e);
                }
                throw e;
            };
        }
    }

    const markedInstance = new Marked();
    function marked(src, opt) {
        return markedInstance.parse(src, opt);
    }
    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */
    marked.options =
        marked.setOptions = function (options) {
            markedInstance.setOptions(options);
            marked.defaults = markedInstance.defaults;
            changeDefaults(marked.defaults);
            return marked;
        };
    /**
     * Gets the original marked default options.
     */
    marked.getDefaults = _getDefaults;
    marked.defaults = _defaults;
    /**
     * Use Extension
     */
    marked.use = function (...args) {
        markedInstance.use(...args);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    /**
     * Run callback for every token
     */
    marked.walkTokens = function (tokens, callback) {
        return markedInstance.walkTokens(tokens, callback);
    };
    /**
     * Compiles markdown to HTML without enclosing `p` tag.
     *
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     * @return String of compiled HTML
     */
    marked.parseInline = markedInstance.parseInline;
    /**
     * Expose
     */
    marked.Parser = _Parser;
    marked.parser = _Parser.parse;
    marked.Renderer = _Renderer;
    marked.TextRenderer = _TextRenderer;
    marked.Lexer = _Lexer;
    marked.lexer = _Lexer.lex;
    marked.Tokenizer = _Tokenizer;
    marked.Hooks = _Hooks;
    marked.parse = marked;
    marked.options;
    marked.setOptions;
    marked.use;
    marked.walkTokens;
    marked.parseInline;
    _Parser.parse;
    _Lexer.lex;

    // Important! Do not expose your API in your extension code. You have to
    // options:
    //
    // 1. Let users provide their own API key.
    // 2. Manage API keys in your own server and proxy all calls to the Gemini
    // API through your own server, where you can implement additional security
    // measures such as authentification.
    //
    // It is only OK to put your API key into this file if you're the only
    // user of your extension or for testing.
    let apiKey = '';

    let genAI = null;
    let model = null;

    const inputPrompt = document.body.querySelector('#input-prompt');
    const buttonPrompt = document.body.querySelector('#button-prompt');
    const elementResponse = document.body.querySelector('#response');
    const elementLoading = document.body.querySelector('#loading');
    const elementError = document.body.querySelector('#error');
    const sliderTemperature = document.body.querySelector('#temperature');
    const labelTemperature = document.body.querySelector('#label-temperature');
    const apiKeyElement = document.body.querySelector('#api-key');
    const toggleKeyVisibilityButton = document.querySelector('#toggle-key-visibility');

    if (apiKeyElement) {
      apiKey = apiKeyElement.value;
    } else {
      console.error('Element with id "api-key" not found');
    }

    function initModel(generationConfig) {
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE
        }
      ];
      const systemInstruction = 'You are a helpful assistant. Always try to detect the language of the user\'s input and respond in the same language.';
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        safetySettings,
        generationConfig,
        systemInstruction: systemInstruction
      });
      return model;
    }

    async function runPrompt(prompt) {
      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
      } catch (e) {
        console.log('Prompt failed');
        console.error(e);
        console.log('Prompt:', prompt);
        throw e;
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const promptInput = document.getElementById('input-prompt');
      if (promptInput) {
        console.log('promptInput found:', promptInput);
        const options = document.querySelectorAll('.option');
        if (options.length > 0) {
          console.log('options found:', options);
          options.forEach(option => {
            option.addEventListener('click', function() {
              promptInput.value = this.getAttribute('data-value');
              promptInput.focus();
              buttonPrompt.removeAttribute('disabled');
            });
          });
        } else {
          console.error('No elements with class "option" found.');
        }
      } else {
        console.error('Element with id "prompt-input" not found.');
      }

      let isHidden = true;
      toggleKeyVisibilityButton.addEventListener('click', () => {
        if (isHidden) {
          apiKeyElement.type = 'text';
          toggleKeyVisibilityButton.textContent = 'hide api key';
        } else {
          apiKeyElement.type = 'password';
          toggleKeyVisibilityButton.textContent = 'show api key';
        }
        isHidden = !isHidden;
      });

      apiKeyElement.addEventListener('change', (event) => {
        apiKey = event.target.value;
      });

      sliderTemperature.addEventListener('input', (event) => {
        labelTemperature.textContent = event.target.value;
        event.target.value;
      });

      inputPrompt.addEventListener('input', () => {
        if (inputPrompt.value.trim()) {
          buttonPrompt.removeAttribute('disabled');
        } else {
          buttonPrompt.setAttribute('disabled', '');
        }
      });

      buttonPrompt.addEventListener('click', async () => {
        const prompt = inputPrompt.value.trim();
        showLoading();
        try {
          const generationConfig = {
            temperature: sliderTemperature.value
          };
          initModel(generationConfig);
          const response = await runPrompt(prompt, generationConfig);
          showResponse(response);
        } catch (e) {
          showError(e);
        }
      });
    });


    function showLoading() {
      hide(elementResponse);
      hide(elementError);
      show(elementLoading);
    }

    function showResponse(response) {
      hide(elementLoading);
      show(elementResponse);

      // Clear the previous content
      elementResponse.innerHTML = '';

      // Convert Markdown to HTML
      elementResponse.innerHTML = marked(response);

      // add copy button to each code block
      const codeBlocks = elementResponse.querySelectorAll('pre');
      codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        block.classList.add('code-block');
        block.appendChild(button);

        button.addEventListener('click', () => {
          const lines = block.innerText.split('\n');
          if (lines[lines.length - 1].trim() === 'Copy') {
            lines.pop();
          }
          const code = lines.join('\n');
          navigator.clipboard.writeText(code).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
              button.textContent = 'Copy';
            }, 2000);
          });
        });
      });

      // Make sure to preserve line breaks in the response
      // elementResponse.textContent = '';
      // const paragraphs = response.split(/\r?\n/);
      // for (let i = 0; i < paragraphs.length; i++) {
      //   const paragraph = paragraphs[i];
      //   if (paragraph) {
      //     elementResponse.appendChild(document.createTextNode(paragraph));
      //   }
      //   // Don't add a new line after the final paragraph
      //   if (i < paragraphs.length - 1) {
      //     elementResponse.appendChild(document.createElement('BR'));
      //   }
      // }
    }

    function showError(error) {
      show(elementError);
      hide(elementResponse);
      hide(elementLoading);
      elementError.textContent = error;
    }

    function show(element) {
      element.removeAttribute('hidden');
    }

    function hide(element) {
      element.setAttribute('hidden', '');
    }

})();
