#include <stdio.h>
#include <math.h>
#include <string.h>

int main(void)
{
    int number, answer;
    char explain[1000] = "Because ", str[10];

    int primeNumber(int n)
    {
        if (n < 2)
        {
            return 0;
        }
        for (int i = 2; i <= llround(sqrt(n)); i++)
        {
            if (n % i == 0)
            {
                return 0;
            }
        }
        return 1;
    }

    int foo(int n)
    {
        if (n == 0)
        {
            return 0;
        }
        int i = 0, sum = 0;
        while (sum <= n)
        {
            i++;
            sum += i;
        }
        return i - 1;
    }

    // ---------------------------------------
    while (1 > 0)
    {
        while (1 > 0)
        {
            printf("Pls enter a number: ");
            scanf("%d", &number);

            if (number < 0)
            {
                printf("Pls enter a positive number\n");
            }
            else
            {
                break;
            }
        }

        if (primeNumber(number) == 0)
        {
            printf("\t%d is not a prime number\n", number);
        }
        else
        {
            printf("\t%d is a prime number\n", number);
        }

        printf("\tfoo(%d) = %d\n", number, foo(number));
        for (int j = 1; j < foo(number); j++)
        {
            sprintf(str, "%d + ", j);
            strcat(explain, str);
        }
        sprintf(str, "%d <= ", foo(number));
        strcat(explain, str);
        sprintf(str, "%d", number);
        strcat(explain, str);
        printf("%s\n", explain);

        while (1 > 0)
        {
            printf("Do you want to continue? (1 for yes and 0 for no) ");
            scanf("%d", &answer);
            if (answer != 1 && answer != 0)
            {
                printf("\t(-_-') R u stupid or st? You must enter 1 or 0!\n");
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