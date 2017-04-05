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
    class John_Kazuma_Centre
    {
        // Fields

        private string centreCity,
                       centreName;
        private double adultTicketPrice;
        private double[] dailyAdultAdmissionSold,
                         totalDailyRevenue;
        private DateTime[] dateOfOperation;

        // Properties

        public string CentreCity { get { return centreCity; } }
        public string CenterName { get { return centreName; } }
        public double AdultTicketPrice
        {
            get { return adultTicketPrice; }
            set
            {   
                //This doesn't allow any values outside of price range to be assigned
                if (value >= 25 && value <= 45)
                    adultTicketPrice = value;
            }
        }
        public DateTime[] DateOfOperation
        {
            get { return dateOfOperation; }
            set
            {
                //This property stops any date passed the current date to be assigned to any of the elements in dateOfOpertaion[].
                for (int i = 0; i < value.GetUpperBound(0) + 1; i++)
                {
                    if (value[i].CompareTo(DateTime.Today) < 0)
                        dateOfOperation[i] = value[i];
                }
            }
        }
        public double[] DailyAdultAdmissionSold { get { return dailyAdultAdmissionSold; } }
        public double[] TotalDailyRevenue
        {
            get
            {
                //This propertie allows each element of totalDailyRevenue[] to be calculated when TotalDailyRevenue is called.
                totalDailyRevenue = new double[dailyAdultAdmissionSold.Length];
                for (int element = 0; element < dailyAdultAdmissionSold.Length; element++)
                {
                    totalDailyRevenue[element] = dailyAdultAdmissionSold[element] * adultTicketPrice;
                }
                return totalDailyRevenue;
            }
        }

        // Constructors

        public John_Kazuma_Centre()
        { }

        public John_Kazuma_Centre(string name, string city, double price, DateTime[] date, double[] ticketsSold)
        {
            //This statement will sort the data for dateOfOperation[] and dailyAdultAdmissionSold[] array by date before assigning to the fields.
            Array.Sort(date, ticketsSold);
            
            centreName = name;
            centreCity = city;
            adultTicketPrice = price;
            dateOfOperation = date;
            dailyAdultAdmissionSold = ticketsSold;
        }

        // Methods

        public override string ToString()
        {
            string output;
            Array.Sort(this.DateOfOperation, this.DailyAdultAdmissionSold);
            output = "Date:\t\tAdmission Sold:\tDaily Revenue\n";
            for (int i = 0; i < this.DateOfOperation.Length; i++)
            {
                output += this.DateOfOperation[i].ToShortDateString() + "\t" + this.DailyAdultAdmissionSold[i] + "\t\t" + this.TotalDailyRevenue[i].ToString("C2") + "\n";
            }
            return "Centre Name: " + this.CenterName + "\nCentre Location: " + this.CentreCity + "\n\n" +
                   "Adult Admission: " + this.AdultTicketPrice.ToString("C2") + "\n\n" +
                   output + "\n" +
                   "Total Revenue: " + this.TotalDailyRevenue.Sum().ToString("C2") + "\n\n" +
                   "Highest Grossing day:\t" + this.dateOfOperation[this.DailyAdultAdmissionSold.ToList().IndexOf(this.DailyAdultAdmissionSold.Max())].ToString("dddd, MMMM dd, yyyy") + "\n" +
                   "Revenue Amount:\t\t" + this.TotalDailyRevenue.Max().ToString("C2");
        }
        public string CreateAllCentresDetailRow()
        {
            string dates = "", 
                   revenue = "",
                   tickets = "",
                   output = "Detailed Summary Report of \n" + this.CenterName + " in " + CentreCity + ":\n\n" +
                            LeftAlign("Total:", 25) + LeftAlign("Highest Grossing Day:", 25) + LeftAlign("Average:", 25) + "\n" +
                            LeftAlign(this.DateOfOperation.Length.ToString() + " days", 25) +
                            LeftAlign(this.DateOfOperation[this.DailyAdultAdmissionSold.ToList().IndexOf(this.DailyAdultAdmissionSold.Max())].ToShortDateString(), 25) + "\n" +
                            LeftAlign(this.TotalDailyRevenue.Sum().ToString("C2"), 25) + LeftAlign(this.DailyAdultAdmissionSold.Max().ToString("C2"), 25) +
                            LeftAlign(this.TotalDailyRevenue.Average().ToString("C2"), 25) + "\n\n" +
                            "Daily Admissions Sales:\n";

            for (int i = 0; i< this.DateOfOperation.Length; i++)
            {
                dates += LeftAlign(this.DateOfOperation[i].ToShortDateString(), 13);
                tickets += LeftAlign(this.DailyAdultAdmissionSold[i].ToString() + " tix", 13);
                revenue += LeftAlign(this.TotalDailyRevenue[i].ToString("C2"), 13);

                if (i != 0 && i % 5 == 0)
                {
                    if (i == this.DateOfOperation.Length - 1)
                        break;
                    dates += "\n";
                    tickets += "\n";
                    revenue += "\n\n";
                    output += dates + tickets + revenue;
                    dates = "";
                    tickets = "";
                    revenue = "";
                }                
            }
            dates += "\n";
            tickets += "\n";
            revenue += "\n\n";
            output += dates + tickets + revenue;
            return output;
        }
        public string LeftAlign(string input, int width)
        {
            input = input.Length > width ? input.Substring(0, width - 4) + "... " : input;
            if (string.IsNullOrEmpty(input))
                return new string(' ', width);
            else
                return input + new String(' ', (width - input.Length));
        }
    }
}
