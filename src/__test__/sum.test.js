import {sum} from "../components/sum";


test("should calculate sum of two numbers", () => {
    const result = sum(2, 2)
    expect(result).toBe(4)
})