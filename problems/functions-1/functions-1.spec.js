
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

xdescribe("average", () => {
    it("returns the average of an array of numbers", () => {
        expect(average([1, 2, 3, 4, 5])).toEqual(3);
        expect(average([1, 2, 3, 4, 5, 6])).toEqual(3.5);
    });

    it("returns 0 for an empty array", () => {
        expect(average([])).toEqual(0);
    });
});

xdescribe("getFullName", () => {
    it("returns the full name of a person", () => {
        expect(getFullName({ firstName: "John", lastName: "Doe" })).toEqual("John Doe");
        expect(getFullName({ firstName: "Jane", lastName: "Doe" })).toEqual("Jane Doe");
    });
});

xdescribe("getAllFullNames", () => {
    it("returns the full names of all the people in the array", () => {
        expect(getAllFullNames([
            { firstName: "John", lastName: "Doe" },
            { firstName: "Jane", lastName: "Doe" },
        ])).toEqual(["John Doe", "Jane Doe"]);
    });
});

xdescribe("getEvens", () => {
    it("returns all the even numbers in the array", () => {
        expect(getEvens([1, 2, 3, 4, 5])).toEqual([2, 4]);
        expect(getEvens([1, 3, 5, 7, 9])).toEqual([]);
    });

    it("returns an empty array if there are no even numbers", () => {
        expect(getEvens([1, 3, 5, 7, 9])).toEqual([]);
    });
});

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

xdescribe("getValuesOrdinal", () => {
    it("returns the ordinal of each value in the array", () => {
        expect(getValuesOrdinal([1, 2, 3, 4, 5])).toEqual(["1st", "2nd", "3rd", "4th", "5th"]);
        expect(getValuesOrdinal([11, 12, 13, 14, 15])).toEqual(["11th", "12th", "13th", "14th", "15th"]);
        expect(getValuesOrdinal([21, 22, 23, 24, 25])).toEqual(["21st", "22nd", "23rd", "24th", "25th"]);
    });
});

xdescribe("getValuesSquare", () => {
    it("returns the square of each value in the array", () => {
        expect(getValuesSquare([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
        expect(getValuesSquare([10, 20, 30, 40, 50])).toEqual([100, 400, 900, 1600, 2500]);
    });
});