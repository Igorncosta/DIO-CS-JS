using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AulaCS.Models
{
    public class Pessoa
    {
        public string? Nome { get; set; }
        public int Idade { get; set; }
       

        public void Apresentar()
        {
            Console.WriteLine($"Oi, meu nome é {Nome} e tenho {Idade} anos");
        }
    }
}