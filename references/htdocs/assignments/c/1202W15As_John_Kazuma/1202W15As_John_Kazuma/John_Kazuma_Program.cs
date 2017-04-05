using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Object Oriented Programming
// COMP1202 CRN46321
// Assignment #2
// Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
// John Baumann 100963202 john.baumann@georgebrown.ca
// Sunday, April 5, 2015

namespace _1202W15As_John_Kazuma
{
    class John_Kazuma_Program
    {
        static void Main(string[] args)
        {
            // vars
            string input;
            int centreArrayElementCounter = 0,
                numInput;
            John_Kazuma_Centre[] centreArray = new John_Kazuma_Centre[100];
            bool looper = true,
                 loopy = true,
                 loopLoopLoop = true;

            while (loopLoopLoop)
            {
                Welcome();
                while (looper)
                {
                    centreArray[centreArrayElementCounter] = CreateCentre();
                    while (true)
                    {
                        Console.Clear();
                        Console.WriteLine("Would your like to add another Science Centre? (Y/N)");
                        input = Console.ReadLine().ToLower();
                        if (input == "y" || input == "yes")
                        {
                            centreArrayElementCounter++;
                            break;
                        }
                        if (input == "n" || input == "no")
                        {
                            looper = false;
                            break;
                        }
                        else
                        {
                            Console.WriteLine("Your entry was not valid");
                            continue;
                        }
                    }
                }
                for (int i = 0; i <= centreArrayElementCounter; i++)
                {
                    Console.Clear();
                    Console.WriteLine(centreArray[i].ToString());
                    Console.WriteLine("\nPress any key to continue. . .");
                    Console.ReadKey();
                }
                looper = true;
                loopy = true;
                while (loopy)
                {
                    Console.Clear();
                    DisplayAllCentresSummary(centreArray, centreArrayElementCounter);
                    while (true)
                    {
                        Console.WriteLine("\nEnter a number to see details on the corresponding Science Centre (1 - {0}):", (centreArrayElementCounter + 1));
                        Console.WriteLine("Entre \"more\" for a more detailed summary report on all the Science Centres:\n" +
                                          "Enter \"exit\" to leave this screen:\n" +
                                          "Enter \"quit\" to end this application:");
                        input = Console.ReadLine().ToLower();
                        if (input == "exit" || input == "e")
                        {
                            Console.Clear();
                            loopy = false;
                            break;
                        }
                        if (input == "q" || input == "quit")
                        {
                            Console.Clear();
                            looper = true;
                            loopy = false;
                            loopLoopLoop = false;
                            break;
                        }
                        if (input == "m" || input == "more")
                        {
                            Console.Clear();
                            for (int i = 0; i <= centreArrayElementCounter; i++)
                            {
                                Console.WriteLine(centreArray[i].CreateAllCentresDetailRow());
                                if (i == (centreArrayElementCounter))
                                    Console.WriteLine("\nPress any key to go back to the previous screen. . .");
                                else
                                    Console.WriteLine("Press any key to continue. . .\n");
                                Console.ReadKey();                                
                            }
                            Console.Clear();
                            DisplayAllCentresSummary(centreArray, centreArrayElementCounter);
                            continue;
                        }
                        if (int.TryParse(input, out numInput))
                            if (numInput < (centreArrayElementCounter + 1) || numInput > 0) 
                            {
                                Console.Clear();
                                Console.WriteLine(centreArray[(numInput - 1)].ToString());
                                Console.WriteLine("\nPress any key to go back to the previous screen. . .");
                                Console.ReadKey();
                                break;
                            }                                
                        Console.WriteLine("Your entry was not valid.");
                    }
                }
            }
        }
        static void Welcome()
        {
            Console.WriteLine("Science Centre Gross Sales Calulator\n" +
                              "by John Baumann & Kazuma Sato\n\n");
            Console.WriteLine("Press any key to continue. . .");
            Console.ReadKey();
        }
        static John_Kazuma_Centre CreateCentre()
        {
            // vars
            string input,
                   name,
                   city;
            bool complete = false;
            double admission;
            int daysOpen;
            DateTime[] dates;
            double[] ticketSoldOnDate;

            // data collection

            while (true)
            {
                Console.Clear();
                Console.WriteLine("Please enter the name of your Science Centre:");
                name = Console.ReadLine();
                Console.WriteLine("\nPlease enter the name of city " + name + " is located in:");
                city = Console.ReadLine();
                // input varification
                while (true)
                {
                    Console.WriteLine("\nPlease enter the adult admission price:\n" +
                                      "Please only use numbers and a decimal.\n" +
                                      "Price must be more than $25.00 and less than $45.00.");
                    input = Console.ReadLine();
                    if (double.TryParse(input, out admission))
                        if (admission >= 25 && admission <= 45)
                            break;
                    Console.WriteLine("\nYour entry was not valid.");
                }
                // input varification
                while (true)
                {
                    Console.WriteLine("\nPlease input the number of days " + name + " has been open for:\n" +
                                      "Please only use numbers.");
                    input = Console.ReadLine();
                    if (int.TryParse(input, out daysOpen))
                        if (daysOpen > 0)
                            break;
                    Console.WriteLine("\nYour entry was not valid.");
                }
                dates = new DateTime[daysOpen];
                ticketSoldOnDate = new double[daysOpen];
                for (int i = 0; i < daysOpen; i++)
                {
                    dates[i] = GetDate();
                    while (true)
                    {
                        Console.WriteLine("\nPlease enter the number of adult admission sold on {0}.", dates[i].ToString("dddd, MMMM dd, yyyy"));
                        input = Console.ReadLine();
                        if (double.TryParse(input, out ticketSoldOnDate[i]))
                            if (ticketSoldOnDate[i] >= 0)
                                break;
                        Console.WriteLine("\nYour entry was not valid.");
                    }
                }
                Console.Clear(); 
                input = "";
                for (int j = 0; j < ticketSoldOnDate.Length; j++)
                    input += dates[j].ToShortDateString() + "\t" + ticketSoldOnDate[j].ToString() + "\n";
                Console.WriteLine("Please verify the following info:\n\n" +
                                  "Centre Name: {0}\nCentre Location: {1}\n\n" +
                                  "Adult Admission Fee: {2:C}\n\n" +
                                  "Date:\t\t" + "Adult Admission Sold:\n" +
                                  "{3}\n\n\n" +
                                  "Is this information correct?(Yes/No)"
                                  , name, city, admission, input);
                while (!complete)
                {
                    input = Console.ReadLine().ToLower();
                    if (input == "n" || input == "no")
                        break;
                    if (input == "y" || input == "yes")
                        complete = true;
                    else
                        Console.WriteLine("Your entry was not valid.");
                }
                if (complete)
                    return new John_Kazuma_Centre(name, city, admission, dates, ticketSoldOnDate);
            }
        }
        static DateTime GetDate()
        {
            //vars

            string input;
            int day,
                month,
                year;

            Console.Clear();
            while (true)
            {
                Console.WriteLine("Please enter sales infomation:\n");
                while (true)
                {
                    Console.WriteLine("\nPlease enter the year of operation (1984-2015)");
                    input = Console.ReadLine();
                    if (int.TryParse(input, out year))
                        if (year > 1983 && year < 2016)
                            break;
                    Console.WriteLine("\nPlease enter a valid entry:");
                }
                while (true)
                {
                    Console.WriteLine("\nPlease enter the month of operation (1-12)");
                    input = Console.ReadLine();
                    if (int.TryParse(input, out month))
                        if (month >= 1 && month <= 12)
                            break;
                    Console.WriteLine("\nPlease enter a valid entry:");
                }
                while (true)
                {
                    Console.WriteLine("\nPlease enter the day of operation (1-{0}):", DateTime.DaysInMonth(year, month));
                    input = Console.ReadLine();
                    if (int.TryParse(input, out day))
                        if (day >= 1 && day <= DateTime.DaysInMonth(year, month))
                            break;
                    Console.WriteLine("\nPlease enter a valid entry:");
                }
                if (new DateTime(year, month, day).CompareTo(DateTime.Today) < 0)
                    return new DateTime(year, month, day);
                Console.WriteLine("\nThe date you have entered was not valid.");
            }
        }
        static void DisplayAllCentresSummary (John_Kazuma_Centre[] centreArray, int centrecounter)
        {
            string output = "Science Centres Summary:\n\n" +
                            LeftAlign("   Centre Name:", 28) + LeftAlign("Centre Location:",28) + LeftAlign("Admission Revenue", 28) + "\n";
            double grandTotalRevenue = 0;
            
            for (int i = 0; i <= centrecounter; i++) 
            {
                output += LeftAlign((i + 1).ToString(), 3) + LeftAlign(centreArray[i].CenterName, 25) +
                          LeftAlign(centreArray[i].CentreCity, 28) +
                          LeftAlign(centreArray[i].TotalDailyRevenue.Sum().ToString("C2"), 28) + "\n";
                
                grandTotalRevenue += centreArray[i].TotalDailyRevenue.Sum();                                
            }
            output += "\nREVENUE GRAND TOTAL: " + grandTotalRevenue.ToString("C2");
            Console.WriteLine(output);
        }
        static string LeftAlign(string input, int width)
        {
            input = input.Length > width ? input.Substring(0, width - 4) + "... " : input;
            if (string.IsNullOrEmpty(input))
                return new string(' ', width);
            else
                return input + new String(' ', (width - input.Length));
        }
    }
}
