using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Angular5TF1.Controllers.Security
{
    public class LoginRequest
    {
        public string Email { get; set; }

        public string Password { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {
        [AllowAnonymous]
        [HttpPost]
        [Route("token")]
        public object Post([FromBody]LoginRequest login)
        {

            //This method returns user id from username and password.
            //var userId = GetUserIdFromCredentials(loginViewModel);
            //if (userId == -1)
            //{
            //    return Unauthorized();
            //}

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, "Test"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("IdUsuario",Guid.NewGuid().ToString()),
                new Claim("role","Admin")
            };

            var token = new JwtSecurityToken
            (

                issuer: "TEST",
                audience: "ADMIN",
                claims: claims,
                expires: DateTime.UtcNow.AddDays(60),
                notBefore: DateTime.UtcNow,
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secret that needs to be at least 16 characters long")),
                        SecurityAlgorithms.HmacSha256)
            );
            var stringToken = new JwtSecurityTokenHandler().WriteToken(token);

            HttpContext.Response.Cookies.Append("token", stringToken,
                options: new Microsoft.AspNetCore.Http.CookieOptions()
                {
                    Expires = DateTime.Now.AddDays(60)
                });

            return new { token = stringToken };
        }
    }
}