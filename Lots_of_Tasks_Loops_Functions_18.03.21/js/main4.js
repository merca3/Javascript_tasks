// 4. Write a program to find the perfect numbers between 1 and 500. 
// The perfect numbers between 1 to 500 are:
// 6
// 28
// 496

// int main() {

//     int number = 1, sum = 0;

//     while (number <= 1000) {

//         sum = 0;
//         for (int i = 1; i < number; i++) {

//             if (number % i == 0) {
//                 sum += i;
//             }
//         }

//         if (sum == number) {
//             printf("%d is perfect\n", number);
//         }
//         number++;
//     }
//     return 0;
// }


let counter = 1;
while (counter <= 500) {
    let sum = 0;
    for (let i = 1; i < counter; i++) {
        if (counter % i == 0 && counter !== i) {
            sum += i;
        }
    }
    if (sum = counter) {
        console.log(counter);
    }
    counter++;
}