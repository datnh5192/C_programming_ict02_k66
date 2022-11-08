#include <stdio.h>
#include <math.h>

int main(void)
{
    int firstNumber, answer, secondNumber;

    int factorial(int n)
    {
        if (n > 1)
        {
            return n * factorial(n - 1);
        }
        return 1;
    }

    int power(int n, int m)
    {
        int result = 1;
        for (int i = 0; i < m; i++)
        {
            result *= n;
        }
        return result;
    }

    while (1 > 0)
    {
        while (1 > 0)
        {
            printf("Pls enter the first number: ");
            scanf("%d", &firstNumber);
            if (firstNumber < 0)
            {
                printf("you must enter a positive number");
            }
            else
            {
                break;
            }
        }

        printf("F(1) = %d\n", factorial(firstNumber));
        printf("F(2) = %d\n", firstNumber * (firstNumber + 1) / 2);

        while (1 > 0)
        {
            printf("Pls enter the second number: ");
            scanf("%d", &secondNumber);
            if (secondNumber < 2)
            {
                printf("you must enter a number greater than 1");
            }
            else
            {
                break;
            }
        }

        printf("F(3) = %d\n", power(firstNumber, secondNumber));

        while (1 > 0)
        {
            printf("Do you want to continue? (1 for yes and 0 for no) ");
            scanf("%d", &answer);
            if (answer != 1 && answer != 0)
            {
                printf("R u stupid or st? You must enter 1 or 0!\n");
            }
            else
            {
                break;
            }
        }

        if (answer == 0)
        {
            printf("\t Thank you for using the program \n");
            break;
        }
    }

    return 0;
}