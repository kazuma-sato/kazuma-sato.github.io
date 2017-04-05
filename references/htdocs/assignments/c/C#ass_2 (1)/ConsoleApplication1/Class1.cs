using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class John_Kazuma_Center
    { 
        private string city;
        private double adultTicketPrice;
        private string nameOfCenter;
        private int numOfOneDayAdultVisitor;
        private double totalDayRevenue;

        public string City
        {
            get
            {
                return city;
            }
        }
        
        public double AdultTicketPrice
        {
            get 
            {
               
                return adultTicketPrice;
            }
            set
            {
                if (value >= 25 && value <= 45) 
                    adultTicketPrice = value;
            }
        }
       
        public string NameOfCenter
        {
            get
            {
                return nameOfCenter;
            }
        }
      
        
        public int NumofOneDayAdultVisitor
        {
            get 
            {
                return numOfOneDayAdultVisitor;
            }
        }
        
        public double TotalDayRevenue
        {
            get
            {
                totalDayRevenue = adultTicketPrice * numOfOneDayAdultVisitor;
                return totalDayRevenue;
            }
        }
        
        public John_Kazuma_Center ()
	    {
            
	    }
        
       public John_Kazuma_Center(int city, string nameOfCenter, int numOfOneDayAdultVisitors, double totalDayRevenue, double adultTicketPrice)
        {
            city = city;
            nameOfCenter = nameOfCenter;
            numOfOneDayAdultVisitor = numOfOneDayAdultVisitor;
            totalDayRevenue = totalDayRevenue;
            adultTicketPrice = adultTicketPrice;
        }

        
        public void DisplayCenterInfo()
        {
            John_Kazuma_Application.Header();
            Console.WriteLine("");
            Console.WriteLine("Press 'any' key to continue. . . ");
            Console.ReadKey();
        }

        John_Kazuma_ScienceCenter.Header();
            Console.WriteLine("Please enter the name of the science center:");
            while (true)
            {
                input = Console.ReadLine();
                if (true)
                {
                    nameOfCenter = input;
                    break;
                }
                else
                {
                    Console.WriteLine("Please enter a valid entry:");
                }
            }


        John_Kazuma_Application.Header();
            Console.WriteLine("Please enter the city the science center is in:");
            while (true)
            {
                input = Console.ReadLine();
                if (true)
                {
                    city = input;
                    break;
                }
                else
                {
                    Console.WriteLine("Please enter a valid entry:");
                }
            }
           
        John_Kazuma_Application.Header();
            Console.WriteLine("Please enter the cost of a adult ticket:");
            while (true)
            {
                input = Console.ReadLine();
                if (double.TryParse(input, out doubleParseTest))
                {
                    adultTicketPrice = input;
                    break;
                }
                else
                {
                    Console.WriteLine("Please enter a valid entry:");
                }
            }

        John_Kazuma_Application.Header();
            Console.WriteLine("Please enter the total number of adult visitors today:");
            while (true)
            {
                input = Console.ReadLine();
                if (int.TryParse(input, out intParseTest))
                {
                    numOfOneDayAdultVisitor = input;
                    break;
                }
                else
                {
                    Console.WriteLine("Please enter a valid entry:");
                }
            }

        John_Kazuma_Application.Header();
            Console.WriteLine("Please enter a date:");
            while (true)
            {
                input = Console.ReadLine();
                if (input = "")
                {
                    date = input;
                    break;
                }
                else
                {
                    Console.WriteLine("Please enter a valid entry:");
                }
            }
           
    }
}
