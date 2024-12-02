function generate() {
    // populates the paragraph tag once the generate button is pressed
    const age = document.getElementById("age").value; // keeps the age constant
    const month = document.getElementById("month").value; // keeps the month constant
    const color = document.getElementById("color").value; // keeps the color constant
    let message = document.getElementById("name"); // makes the message populate with the correct named based on m/c/age

    //used unique celebrity names based on age, then month, then color

    if (age >= 50) {
        // checks if 50 and up
        if (month == "January") {
            //checks the months then continues to color
            if (color == "Red") {
                message.innerText = "You are Dwayne Johnson"; //checks the colorx6
            } else if (color == "Blue") {
                message.innerText = "You are Oprah Winfrey";
            } else if (color == "Green") {
                message.innerText = "You are Emma Stone";
            } else if (color == "Yellow") {
                message.innerText = "You are Daniel Radcliffe";
            } else if (color == "Purple") {
                message.innerText = "You are Viola Davis";
            } else {
                message.innerText = "You are Selena Gomez";
            }
        } else if (month == "February") {
            if (color == "Red") {
                message.innerText = "You are Rihanna";
            } else if (color == "Blue") {
                message.innerText = "You are Michael B. Jordan";
            } else if (color == "Green") {
                message.innerText = "You are Taylor Swift";
            } else if (color == "Yellow") {
                message.innerText = "You are Steve Harvey";
            } else if (color == "Purple") {
                message.innerText = "You are Gal Gadot";
            } else {
                message.innerText = "You are Zendaya";
            }
        } else if (month == "March") {
            if (color == "Red") {
                message.innerText = "You are Robert Downey Jr.";
            } else if (color == "Blue") {
                message.innerText = "You are Beyoncé";
            } else if (color == "Green") {
                message.innerText = "You are Chris Evans";
            } else if (color == "Yellow") {
                message.innerText = "You are Mindy Kaling";
            } else if (color == "Purple") {
                message.innerText = "You are Tom Hiddleston";
            } else {
                message.innerText = "You are Ariana Grande";
            }
        } else if (month == "April") {
            if (color == "Red") {
                message.innerText = "You are Lady Gaga";
            } else if (color == "Blue") {
                message.innerText = "You are Mariah Carey";
            } else if (color == "Green") {
                message.innerText = "You are Keanu Reeves";
            } else if (color == "Yellow") {
                message.innerText = "You are Zendaya";
            } else if (color == "Purple") {
                message.innerText = "You are Viola Davis";
            } else {
                message.innerText = "You are Dolly Parton";
            }
        } else if (month == "May") {
            if (color == "Red") {
                message.innerText = "You are Scarlett Johansson";
            } else if (color == "Blue") {
                message.innerText = "You are Chris Hemsworth";
            } else if (color == "Green") {
                message.innerText = "You are Ryan Reynolds";
            } else if (color == "Yellow") {
                message.innerText = "You are Margot Robbie";
            } else if (color == "Purple") {
                message.innerText = "You are Idris Elba";
            } else {
                message.innerText = "You are Reese Witherspoon";
            }
        } else if (month == "June") {
            if (color == "Red") {
                message.innerText = "You are Angelina Jolie";
            } else if (color == "Blue") {
                message.innerText = "You are Chris Pratt";
            } else if (color == "Green") {
                message.innerText = "You are Jennifer Lopez";
            } else if (color == "Yellow") {
                message.innerText = "You are Will Smith";
            } else if (color == "Purple") {
                message.innerText = "You are Chadwick Boseman";
            } else {
                message.innerText = "You are Selena Gomez";
            }
        } else if (month == "July") {
            if (color == "Red") {
                message.innerText = "You are Tom Holland";
            } else if (color == "Blue") {
                message.innerText = "You are Billie Eilish";
            } else if (color == "Green") {
                message.innerText = "You are Priyanka Chopra";
            } else if (color == "Yellow") {
                message.innerText = "You are Trevor Noah";
            } else if (color == "Purple") {
                message.innerText = "You are Benedict Cumberbatch";
            } else {
                message.innerText = "You are Taylor Swift";
            }
        } else if (month == "August") {
            if (color == "Red") {
                message.innerText = "You are Barack Obama";
            } else if (color == "Blue") {
                message.innerText = "You are Adele";
            } else if (color == "Green") {
                message.innerText = "You are Jason Momoa";
            } else if (color == "Yellow") {
                message.innerText = "You are Nicole Kidman";
            } else if (color == "Purple") {
                message.innerText = "You are Samuel L. Jackson";
            } else {
                message.innerText = "You are Miley Cyrus";
            }
        } else if (month == "September") {
            if (color == "Red") {
                message.innerText = "You are Hugh Jackman";
            } else if (color == "Blue") {
                message.innerText = "You are Jennifer Lawrence";
            } else if (color == "Green") {
                message.innerText = "You are Ryan Gosling";
            } else if (color == "Yellow") {
                message.innerText = "You are Blake Lively";
            } else if (color == "Purple") {
                message.innerText = "You are Lupita Nyong'o";
            } else {
                message.innerText = "You are Billie Eilish";
            }
        } else if (month == "October") {
            if (color == "Red") {
                message.innerText = "You are Joaquin Phoenix";
            } else if (color == "Blue") {
                message.innerText = "You are Emma Stone";
            } else if (color == "Green") {
                message.innerText = "You are Simu Liu";
            } else if (color == "Yellow") {
                message.innerText = "You are Anna Kendrick";
            } else if (color == "Purple") {
                message.innerText = "You are Michael Fassbender";
            } else {
                message.innerText = "You are Katy Perry";
            }
        } else if (month == "November") {
            if (color == "Red") {
                message.innerText = "You are Leonardo DiCaprio";
            } else if (color == "Blue") {
                message.innerText = "You are Kristen Bell";
            } else if (color == "Green") {
                message.innerText = "You are Henry Cavill";
            } else if (color == "Yellow") {
                message.innerText = "You are Natalie Portman";
            } else if (color == "Purple") {
                message.innerText = "You are Benedict Cumberbatch";
            } else {
                message.innerText = "You are Lady Gaga";
            }
        } else {
            if (color == "Red") {
                message.innerText = "You are Timothée Chalamet";
            } else if (color == "Blue") {
                message.innerText = "You are Sandra Bullock";
            } else if (color == "Green") {
                message.innerText = "You are Hugh Grant";
            } else if (color == "Yellow") {
                message.innerText = "You are Anne Hathaway";
            } else if (color == "Purple") {
                message.innerText = "You are Mahershala Ali";
            } else {
                message.innerText = "You are Florence Pugh";
            }
        }
    } else if (age <= 49 && age == 25) {
        if (month == "January") {
            if (color == "Red") {
                message.innerText = "You are Emily Blunt";
            } else if (color == "Blue") {
                message.innerText = "You are Dev Patel";
            } else if (color == "Green") {
                message.innerText = "You are Dakota Johnson";
            } else if (color == "Yellow") {
                message.innerText = "You are Benedict Cumberbatch";
            } else if (color == "Purple") {
                message.innerText = "You are Tessa Thompson";
            } else {
                message.innerText = "You are Riz Ahmed";
            }
        } else if (month == "February") {
            if (color == "Red") {
                message.innerText = "You are Emma Mackey";
            } else if (color == "Blue") {
                message.innerText = "You are Aaron Taylor-Johnson";
            } else if (color == "Green") {
                message.innerText = "You are Zoë Kravitz";
            } else if (color == "Yellow") {
                message.innerText = "You are Winston Duke";
            } else if (color == "Purple") {
                message.innerText = "You are Daisy Edgar-Jones";
            } else {
                message.innerText = "You are Josh Hutcherson";
            }
        } else if (month == "March") {
            if (color == "Red") {
                message.innerText = "You are Ana de Armas";
            } else if (color == "Blue") {
                message.innerText = "You are Simu Liu";
            } else if (color == "Green") {
                message.innerText = "You are Sophie Thatcher";
            } else if (color == "Yellow") {
                message.innerText = "You are Charlie Heaton";
            } else if (color == "Purple") {
                message.innerText = "You are Maya Rudolph";
            } else {
                message.innerText = "You are Joe Alwyn";
            }
        } else if (month == "April") {
            if (color == "Red") {
                message.innerText = "You are Florence Kasumba";
            } else if (color == "Blue") {
                message.innerText = "You are Jonathan Groff";
            } else if (color == "Green") {
                message.innerText = "You are Kiersey Clemons";
            } else if (color == "Yellow") {
                message.innerText = "You are Yahya Abdul-Mateen II";
            } else if (color == "Purple") {
                message.innerText = "You are Ansel Elgort";
            } else {
                message.innerText = "You are Laura Harrier";
            }
        } else if (month == "May") {
            if (color == "Red") {
                message.innerText = "You are Ella Balinska";
            } else if (color == "Blue") {
                message.innerText = "You are Barry Keoghan";
            } else if (color == "Green") {
                message.innerText = "You are Jenna Fischer";
            } else if (color == "Yellow") {
                message.innerText = "You are Sterling K. Brown";
            } else if (color == "Purple") {
                message.innerText = "You are Jessica Henwick";
            } else {
                message.innerText = "You are Charlie Cox";
            }
        } else if (month == "June") {
            if (color == "Red") {
                message.innerText = "You are Tatiana Maslany";
            } else if (color == "Blue") {
                message.innerText = "You are Jacob Tremblay";
            } else if (color == "Green") {
                message.innerText = "You are Michelle Yeoh";
            } else if (color == "Yellow") {
                message.innerText = "You are Jeremy Strong";
            } else if (color == "Purple") {
                message.innerText = "You are Katherine Langford";
            } else {
                message.innerText = "You are Caleb McLaughlin";
            }
        } else if (month == "July") {
            if (color == "Red") {
                message.innerText = "You are Rosario Dawson";
            } else if (color == "Blue") {
                message.innerText = "You are Ezra Miller";
            } else if (color == "Green") {
                message.innerText = "You are Lakeith Stanfield";
            } else if (color == "Yellow") {
                message.innerText = "You are Rachel Brosnahan";
            } else if (color == "Purple") {
                message.innerText = "You are Nicholas Hoult";
            } else {
                message.innerText = "You are Beanie Feldstein";
            }
        } else if (month == "August") {
            if (color == "Red") {
                message.innerText = "You are Dominique Fishback";
            } else if (color == "Blue") {
                message.innerText = "You are Justice Smith";
            } else if (color == "Green") {
                message.innerText = "You are Naomi Scott";
            } else if (color == "Yellow") {
                message.innerText = "You are David Corenswet";
            } else if (color == "Purple") {
                message.innerText = "You are Camila Mendes";
            } else {
                message.innerText = "You are Rachel Zegler";
            }
        } else if (month == "September") {
            if (color == "Red") {
                message.innerText = "You are KiKi Layne";
            } else if (color == "Blue") {
                message.innerText = "You are Jharrel Jerome";
            } else if (color == "Green") {
                message.innerText = "You are Mackenzie Davis";
            } else if (color == "Yellow") {
                message.innerText = "You are Jamie Campbell Bower";
            } else if (color == "Purple") {
                message.innerText = "You are Amandla Stenberg";
            } else {
                message.innerText = "You are John Krasinski";
            }
        } else if (month == "October") {
            if (color == "Red") {
                message.innerText = "You are Lupita Nyong'o";
            } else if (color == "Blue") {
                message.innerText = "You are Alfie Allen";
            } else if (color == "Green") {
                message.innerText = "You are Brian Tyree Henry";
            } else if (color == "Yellow") {
                message.innerText = "You are Kaitlyn Dever";
            } else if (color == "Purple") {
                message.innerText = "You are Manny Jacinto";
            } else {
                message.innerText = "You are Madeleine Madden";
            }
        } else if (month == "November") {
            if (color == "Red") {
                message.innerText = "You are Paul Mescal";
            } else if (color == "Blue") {
                message.innerText = "You are Lashana Lynch";
            } else if (color == "Green") {
                message.innerText = "You are Eiza González";
            } else if (color == "Yellow") {
                message.innerText = "You are Devyn Aoki";
            } else if (color == "Purple") {
                message.innerText = "You are Dacre Montgomery";
            } else {
                message.innerText = "You are Sophia Lillis";
            }
        } else {
            if (color == "Red") {
                message.innerText = "You are Jessie Buckley";
            } else if (color == "Blue") {
                message.innerText = "You are Anthony Ramos";
            } else if (color == "Green") {
                message.innerText = "You are Eva Green";
            } else if (color == "Yellow") {
                message.innerText = "You are Jamie Lee Curtis";
            } else if (color == "Purple") {
                message.innerText = "You are Andrew Koji";
            } else {
                message.innerText = "You are Priyanka Chopra Jonas";
            }
        }
    } else {
        if (month == "January") {
            if (color == "Red") {
                message.innerText = "You are Millie Bobby Brown";
            } else if (color == "Blue") {
                message.innerText = "You are Austin Butler";
            } else if (color == "Green") {
                message.innerText = "You are Olivia Rodrigo";
            } else if (color == "Yellow") {
                message.innerText = "You are Finn Wolfhard";
            } else if (color == "Purple") {
                message.innerText = "You are Emma D'Arcy";
            } else {
                message.innerText = "You are Timothée Chalamet";
            }
        } else if (month == "February") {
            if (color == "Red") {
                message.innerText = "You are Jenna Ortega";
            } else if (color == "Blue") {
                message.innerText = "You are Joe Keery";
            } else if (color == "Green") {
                message.innerText = "You are Hailee Steinfeld";
            } else if (color == "Yellow") {
                message.innerText = "You are Noah Centineo";
            } else if (color == "Purple") {
                message.innerText = "You are Sadie Sink";
            } else {
                message.innerText = "You are Louis Partridge";
            }
        } else if (month == "March") {
            if (color == "Red") {
                message.innerText = "You are Maisie Williams";
            } else if (color == "Blue") {
                message.innerText = "You are Gaten Matarazzo";
            } else if (color == "Green") {
                message.innerText = "You are Maya Hawke";
            } else if (color == "Yellow") {
                message.innerText = "You are Jacob Elordi";
            } else if (color == "Purple") {
                message.innerText = "You are Elle Fanning";
            } else {
                message.innerText = "You are Jaden Smith";
            }
        } else if (month == "April") {
            if (color == "Red") {
                message.innerText = "You are Natalia Dyer";
            } else if (color == "Blue") {
                message.innerText = "You are Logan Lerman";
            } else if (color == "Green") {
                message.innerText = "You are Kiernan Shipka";
            } else if (color == "Yellow") {
                message.innerText = "You are Emma Watson";
            } else if (color == "Purple") {
                message.innerText = "You are Thomas Brodie-Sangster";
            } else {
                message.innerText = "You are Chloë Grace Moretz";
            }
        } else if (month == "May") {
            if (color == "Red") {
                message.innerText = "You are Sophie Turner";
            } else if (color == "Blue") {
                message.innerText = "You are Asa Butterfield";
            } else if (color == "Green") {
                message.innerText = "You are Florence Pugh";
            } else if (color == "Yellow") {
                message.innerText = "You are Nat Wolff";
            } else if (color == "Purple") {
                message.innerText = "You are Anya Taylor-Joy";
            } else {
                message.innerText = "You are Dylan Minnette";
            }
        } else if (month == "June") {
            if (color == "Red") {
                message.innerText = "You are Auli'i Cravalho";
            } else if (color == "Blue") {
                message.innerText = "You are Noah Schnapp";
            } else if (color == "Green") {
                message.innerText = "You are Sabrina Carpenter";
            } else if (color == "Yellow") {
                message.innerText = "You are Cole Sprouse";
            } else if (color == "Purple") {
                message.innerText = "You are Zendaya";
            } else {
                message.innerText = "You are Caleb Landry Jones";
            }
        } else if (month == "July") {
            if (color == "Red") {
                message.innerText = "You are Joey King";
            } else if (color == "Blue") {
                message.innerText = "You are Dacre Montgomery";
            } else if (color == "Green") {
                message.innerText = "You are Kiersey Clemons";
            } else if (color == "Yellow") {
                message.innerText = "You are Nicholas Galitzine";
            } else if (color == "Purple") {
                message.innerText = "You are Katherine McNamara";
            } else {
                message.innerText = "You are Hero Fiennes Tiffin";
            }
        } else if (month == "August") {
            if (color == "Red") {
                message.innerText = "You are Millie Alcock";
            } else if (color == "Blue") {
                message.innerText = "You are Archie Madekwe";
            } else if (color == "Green") {
                message.innerText = "You are Madelaine Petsch";
            } else if (color == "Yellow") {
                message.innerText = "You are Jacob Bertrand";
            } else if (color == "Purple") {
                message.innerText = "You are Camila Cabello";
            } else {
                message.innerText = "You are Gavin Leatherwood";
            }
        } else if (month == "September") {
            if (color == "Red") {
                message.innerText = "You are Peyton List";
            } else if (color == "Blue") {
                message.innerText = "You are Finn Cole";
            } else if (color == "Green") {
                message.innerText = "You are Katherine Langford";
            } else if (color == "Yellow") {
                message.innerText = "You are Levi Miller";
            } else if (color == "Purple") {
                message.innerText = "You are Madison Iseman";
            } else {
                message.innerText = "You are Ty Simpkins";
            }
        } else if (month == "October") {
            if (color == "Red") {
                message.innerText = "You are India Eisley";
            } else if (color == "Blue") {
                message.innerText = "You are Asa Butterfield";
            } else if (color == "Green") {
                message.innerText = "You are Sofia Carson";
            } else if (color == "Yellow") {
                message.innerText = "You are Freddie Highmore";
            } else if (color == "Purple") {
                message.innerText = "You are Alisha Boe";
            } else {
                message.innerText = "You are Noah Jupe";
            }
        } else if (month == "November") {
            if (color == "Red") {
                message.innerText = "You are Storm Reid";
            } else if (color == "Blue") {
                message.innerText = "You are Sunny Suljic";
            } else if (color == "Green") {
                message.innerText = "You are Lulu Wilson";
            } else if (color == "Yellow") {
                message.innerText = "You are Julian Dennison";
            } else if (color == "Purple") {
                message.innerText = "You are Dafne Keen";
            } else {
                message.innerText = "You are Jack Quaid";
            }
        } else {
            if (color == "Red") {
                message.innerText = "You are Natalia Reyes";
            } else if (color == "Blue") {
                message.innerText = "You are Freddie Thorp";
            } else if (color == "Green") {
                message.innerText = "You are Halston Sage";
            } else if (color == "Yellow") {
                message.innerText = "You are Archie Renaux";
            } else if (color == "Purple") {
                message.innerText = "You are Angourie Rice";
            } else {
                message.innerText = "You are Isabela Merced";
            }
        }
    }
}
