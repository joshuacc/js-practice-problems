// Write the "getLength" function here


describe("getLength", () => {
    it("returns the length of the array", () => {
        expect(getLength([1, 2, 3])).toBe(3);
        expect(getLength([1, 2, 3, 4, 5])).toBe(5);
        expect(getLength([])).toBe(0);
    });
});

// Write the "total" function here


xdescribe("total", () => {
    it("returns the total of all the numbers in the array", () => {
        expect(total([1, 2, 3])).toEqual(6);
        expect(total([1, 2, 3, 4, 5])).toEqual(15);
        expect(total([10, 20, 30, 40, 50])).toEqual(150);
    });

    it("returns 0 if the array is empty", () => {
        expect(total([])).toEqual(0);
    });
});

// Write the "average" function here


xdescribe("average", () => {
    it("returns the average of an array of numbers", () => {
        expect(average([1, 2, 3, 4, 5])).toEqual(3);
        expect(average([1, 2, 3, 4, 5, 6])).toEqual(3.5);
    });

    it("returns 0 for an empty array", () => {
        expect(average([])).toEqual(0);
    });
});

// Write the "getFullName" function here


xdescribe("getFullName", () => {
    it("returns the full name of a person", () => {
        expect(getFullName({ firstName: "Josemaria", lastName: "Escriva" })).toEqual("Josemaria Escriva");
        expect(getFullName({ firstName: "Dorothy", lastName: "Day" })).toEqual("Dorothy Day");
    });
});

// Write the "getAllFullNames" function here


xdescribe("getAllFullNames", () => {
    it("returns the full names of all the people in the array", () => {
        expect(getAllFullNames([
            { firstName: "John", lastName: "Chrysostom" },
            { firstName: "Teresa", lastName: "Benedicta" },
        ])).toEqual(["John Chrysostom", "Teresa Benedicta"]);
    });
});

// Write the "getEvens" function here


xdescribe("getEvens", () => {
    it("returns all the even numbers in the array", () => {
        expect(getEvens([1, 2, 3, 4, 5])).toEqual([2, 4]);
        expect(getEvens([1, 3, 5, 7, 9])).toEqual([]);
    });

    it("returns an empty array if there are no even numbers", () => {
        expect(getEvens([1, 3, 5, 7, 9])).toEqual([]);
    });
});

// Write the "findFirstOccurrenceIndex" function here


xdescribe("findFirstOccurrenceIndex", () => {
    it("returns the index of the first occurrence of the value in the array", () => {
        expect(findFirstOccurrenceIndex([1, 2, 3, 4, 5], 3)).toEqual(2);
        expect(findFirstOccurrenceIndex([1, 2, 3, 4, 5], 1)).toEqual(0);
        expect(findFirstOccurrenceIndex([1, 2, 3, 4, 5], 5)).toEqual(4);
    });

    it("returns -1 if the value is not in the array", () => {
        expect(findFirstOccurrenceIndex([1, 2, 3, 4, 5], 6)).toEqual(-1);
    });
});

// Write the "findLastOccurrenceIndex" function here


xdescribe("findLastOccurrenceIndex", () => {
    it("returns the index of the last occurrence of the value in the array", () => {
        expect(findLastOccurrenceIndex([1, 2, 3, 4, 5], 3)).toEqual(2);
        expect(findLastOccurrenceIndex([1, 2, 3, 4, 5], 1)).toEqual(0);
        expect(findLastOccurrenceIndex([1, 2, 3, 4, 5], 5)).toEqual(4);
    });

    it("returns -1 if the value is not in the array", () => {
        expect(findLastOccurrenceIndex([1, 2, 3, 4, 5], 6)).toEqual(-1);
    });
});

// Write the "getValuesOrdinal" function here


xdescribe("getValuesOrdinal", () => {
    it("returns the ordinal of each value in the array", () => {
        expect(getValuesOrdinal([1, 2, 3, 4, 5])).toEqual(["1st", "2nd", "3rd", "4th", "5th"]);
        expect(getValuesOrdinal([11, 12, 13, 14, 15])).toEqual(["11th", "12th", "13th", "14th", "15th"]);
        expect(getValuesOrdinal([21, 22, 23, 24, 25])).toEqual(["21st", "22nd", "23rd", "24th", "25th"]);
    });
});

// Write the "getValuesSquare" function here


xdescribe("getValuesSquare", () => {
    it("returns the square of each value in the array", () => {
        expect(getValuesSquare([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
        expect(getValuesSquare([10, 20, 30, 40, 50])).toEqual([100, 400, 900, 1600, 2500]);
    });
});


// Write the "sumOfOdds" function here


xdescribe("sumOfOdds", () => {
    it("returns the sum of all the odd numbers in the array", () => {
        expect(sumOfOdds([1, 2, 3, 4, 5])).toEqual(9);
        expect(sumOfOdds([1, 3, 5, 7, 9])).toEqual(25);
    });

    it("returns 0 if there are no odd numbers in the array", () => {
        expect(sumOfOdds([2, 4, 6, 8, 10])).toEqual(0);
    });

    it("returns 0 if the array is empty", () => {
        expect(sumOfOdds([])).toEqual(0);
    });
});

// Write the "findYoungestPerson" function here


xdescribe("findYoungestPerson", () => {
    it("returns the youngest person in the array", () => {
        expect(findYoungestPerson([
            { firstName: "Augustine", lastName: "Hippo", age: 30 },
            { firstName: "Theresa", lastName: "Avila", age: 25 },
        ])).toEqual({ firstName: "Theresa", lastName: "Avila", age: 25 });

        expect(findYoungestPerson([
            { firstName: "Ignatius", lastName: "Loyola", age: 30 },
            { firstName: "Thomas", lastName: "Aquinas", age: 6 },
            { firstName: "Elizabeth", lastName: "Trinity", age: 25 },
        ])).toEqual({ firstName: "Thomas", lastName: "Aquinas", age: 6 });
    });

    it("returns undefined if the array is empty", () => {
        expect(findYoungestPerson([])).toEqual(undefined);
    });
});


// Write the "findAverageAge" function here


xdescribe("findAverageAge", () => {
    it("returns the average age of all the people in the array", () => {
        expect(findAverageAge([
            { firstName: "Benedict", lastName: "Nursia", age: 30 },
            { firstName: "Scholastica", lastName: "Nursia", age: 25 },
        ])).toEqual(27.5);

        expect(findAverageAge([
            { firstName: "Gregory", lastName: "Great", age: 30 },
            { firstName: "John", lastName: "Paul", age: 6 },
            { firstName: "Leo", lastName: "Great", age: 25 },
        ])).toEqual(20.333333333333332);
    });

    it("returns 0 if the array is empty", () => {
        expect(findAverageAge([])).toEqual(0);
    });
});