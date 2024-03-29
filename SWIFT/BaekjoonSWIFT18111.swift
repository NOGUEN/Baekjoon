let NMB = readLine()!.split(separator: " ").map { Int(String($0))! }
let N = NMB[0]
let M = NMB[1]
let B = NMB[2]
var ground = Array(repeating: [Int](), count: N)
var highest = 0
var lowest = 256
var answer = Array(repeating: 0, count: 2)

for i in 0..<N {
    ground[i] = readLine()!.split(separator: " ").map { Int(String($0))! }
}

for i in 0..<N {
    for j in 0..<M {
        if ground[i][j] <= lowest {
            lowest = ground[i][j]
        }
        if ground[i][j] >= highest {
            highest = ground[i][j]
        }
    }
}

for i in stride(from: highest, through: lowest, by: -1) {
    var tmpTime = 0
    var item = B
    for j in 0..<N {
        for k in 0..<M {
            if ground[j][k] < i {
                item -= (i - ground[j][k])
                tmpTime += (i - ground[j][k])
            } else if ground[j][k] > i {
                item += (ground[j][k] - i)
                tmpTime += (ground[j][k] - i) * 2
            } else {
                continue
            }
        }
    }
    if item < 0 {
        continue
    }
    if answer[0] == 0 {
        answer[0] = tmpTime
        answer[1] = i
    } else {
        if answer[0] > tmpTime {
            answer[0] = tmpTime
            answer[1] = i
        } else if answer[0] == tmpTime {
            answer[1] = max(answer[1], i)
        }
    }
}

print(answer[0], answer[1])
