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
