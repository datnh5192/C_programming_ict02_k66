#include <stdio.h>

int main()
{
    int number, answer, surplus;
    char unit[][20] = {"don vi", "chuc", "tram", "nghin", "chuc nghin", "tram nghin", "trieu", "chuc trieu", "tram trieu", "ty"};

    do
    {
        int i = 0;
        printf("Pls enter a number: ");
        scanf("%d", &number);
        while (number != 0)
        {
            surplus = number % 10;
            printf("Chu so hang %s la %d\n", unit[i], surplus);
            i++;
            number = (number - surplus) / 10;
        }

        do
        {
            printf("Do you want to continue? (1 for yes and 0 for no) ");
            scanf("%d", &answer);
            if (answer != 1 && answer != 0)
            {
                printf("You must enter 1 or 0!\n");
            }
            else
            {
                break;
            }
        } while (1 > 0);

        if (answer == 0)
        {
            break;
        }
    } while (1 > 0);

    return 0;
}