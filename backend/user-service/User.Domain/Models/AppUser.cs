using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace User.Domain
{
    public class AppUser : IdentityUser
    {
        [Required]
        public string DisplayName { get; set; }
        public HashSet<string> Permissions { get; set; }
    }
}