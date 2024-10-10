const axios = require('axios');

const url = `https://test-share.shub.edu.vn/api/intern-test`

async function getData() {
    try {
        const response = await axios.get(`${url}/input`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function sendData(arrResult, token) {
    try {
        await axios.post(`${url}/output`,
            arrResult,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Send data successfully');
    } catch (error) {
        console.error('Cannot send data:', error.response ? error.response.data : error.message);
    }
}

const calculatePrefixSum = (data) => {
    const prefixSum = new Array(data.length + 1).fill(0);
    for (let i = 0; i < data.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + data[i];
    }
    return prefixSum;
};

const calculateEvenOddSums = (data) => {
    const evenPrefixSum = new Array(data.length + 1).fill(0);
    const oddPrefixSum = new Array(data.length + 1).fill(0);

    for (let i = 0; i < data.length; i++) {
        evenPrefixSum[i + 1] = evenPrefixSum[i] + (i % 2 === 0 ? data[i] : 0);
        oddPrefixSum[i + 1] = oddPrefixSum[i] + (i % 2 !== 0 ? data[i] : 0);
    }

    return { evenPrefixSum, oddPrefixSum };
};

const sumDimension = (prefixSum, l, r) => {
    return prefixSum[r + 1] - prefixSum[l];
};

const sumEvenDifferenceOdd = (evenPrefixSum, oddPrefixSum, l, r) => {
    const evenSum = evenPrefixSum[r + 1] - evenPrefixSum[l];
    const oddSum = oddPrefixSum[r + 1] - oddPrefixSum[l];
    return evenSum - oddSum;
};

(async function () {
    const { data, query: queries, token } = await getData();
    const arrResult = [];

    const prefixSum = calculatePrefixSum(data);
    const { evenPrefixSum, oddPrefixSum } = calculateEvenOddSums(data);

    queries.forEach(query => {
        const l = query.range[0];
        const r = query.range[1];
        let result = null;

        if (query.type === "1") {
            result = sumDimension(prefixSum, l, r);
        } else if (query.type === "2") {
            result = sumEvenDifferenceOdd(evenPrefixSum, oddPrefixSum, l, r);
        }

        arrResult.push(result);
    });

    console.log("\nData: ");
    console.log(data);
    console.log("Queries: ");
    console.log(queries);
    console.log("\nResult:");
    console.log(arrResult);

    await sendData(arrResult, token);
})();
