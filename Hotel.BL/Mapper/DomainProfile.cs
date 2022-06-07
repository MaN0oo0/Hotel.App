using AutoMapper;
using Hotel.BL.Models;
using Hotel.DAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Mapper
{
    public class DomainProfile:Profile
    {
        public DomainProfile()
        {
            //From Entity To VM (GetData())
            CreateMap<Reception, ReceptionVM>();

            //Form VM To Entity (Create -Edite-Delete) 
            CreateMap<ReceptionVM, Reception>();
            //From Entity To VM (GetData())
            CreateMap<Customers, CustomerVM>();
            //Form VM To Entity (Create -Edite-Delete) 
            CreateMap<CustomerVM, Customers>(); 
            //From Entity To VM (GetData())
            CreateMap<Rooms, RoomsVM>();
            //Form VM To Entity (Create -Edite-Delete) 
            CreateMap<RoomsVM, Rooms>(); 
            //From Entity To VM (GetData())
            CreateMap<Cleaners, CleanersVM>();
            //Form VM To Entity (Create -Edite-Delete) 
            CreateMap<CleanersVM, Cleaners>();

            //From Entity To VM (GetData())
            CreateMap<Revirsations, ReservationsVM>();
            //Form VM To Entity (Create -Edite-Delete) 
            CreateMap<ReservationsVM, Revirsations>();

        }
    }
}
