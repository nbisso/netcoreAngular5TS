﻿using System;
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
    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {
        [AllowAnonymous]
        [HttpPost]
        [Route("token")]
        public object Post()
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

            return new { token = new JwtSecurityTokenHandler().WriteToken(token) };


        }
    }
}