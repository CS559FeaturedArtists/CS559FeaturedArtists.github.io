const stone_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVQ4y4VTQRIAMQTzXA9w7xM8uXti0jS6B8OYEiK1zNxoa60dETsiOnb3I4dmFWABPypz925Wbw1REImRp8Y9Aa5QnvM4bZlhZ0YrzzxhjTGiMl6pfGaeEzAKxuMVsDsjvNbrBqwBReC0Yp9R8aCKlejM3S8h8UossOOMarTX2LyuKYLUn2Apl7fpE03MY+6a4CWmiUj7U5/iBME+eeR3wyunqoUAAAAASUVORK5CYII=";
const grass_text = "data:image/png;base64,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"
const grass_side_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVQ4y3VSSUuDQQydXyN48OhCse4LVg+KFhcUaxXrMqJiFbwoIvKBIBQFexFcEHexrlAQix68+KOeJJCPNG0PmWSyvJdkxqXfYtj46MPaaw9mrxpZlp86MXlaC//Qhq2vIY4v3LUgdR3F/G0zps7r0Z+pwtJjO9z6ey8n7ufHsJMbwO7LIEaj1Zi7aULyooGBjn6mkSkkmISKKZ/AFu9b4Q4+J7jg5M9j5jLCDHRfyXWxpg63C3EcfieR/U2xbzhbg8RZHduODu89X0hWn7tDm4Q6IE3tkt6MR8IY2e7Yx9ggnd8b54D4dLIQSW4IIEnk1GC6UIOJTUKEjg7tDIKgKEHi2tZEzibrTnQ35fwMYJ1aS8u2WMecXYrdshU7itOMdmYBFr8eRXblys2lGejp9Aj6mfkjWacFqSTSVdEIJOmRjpLFyRiyF/1azibpDev5LVEJgP0DsqRK7y8E/2kQKqQTbHIJAAAAAElFTkSuQmCC";
const grass_top_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAtJJREFUOI01k9tO3EgARI/bbt/HY88FAkSbAC8R2ceV8iP7HfuzKwVFG7GAMhAyw4zN2NNut9veB9h6LpWOVFXOn3/9MZ5d5qy+72gPPQAycFF1RxhL4omP6Sxa9YzDiCMciqOYu+tn8qMY4QB3188Eb+Yk82kbw3Qe0bU926eGJAvIlzFB5HH+eUG1UUyKkHEAL0wkxlg2DzWeFLiewPMFprOEiUS4gk73+IFHNo+4+XuNqg0ycPntssB7uCmJUkkQeYSxpDcD0heUG0U6DajLFuEK/NDFDzw83yWZCvJlxO3XDeLkPGcYYHGaUleafBGR5iF+6DKdR1z8vkQfDPrQE6WSfBmjD4btU0OUSjyje9I84P7bltOLnMe7inQaEEaSQ92xXu2ZHSe0yrBe1XTta5DnubhS4FUbRXEcc3qeU5ctcerTvHR4UtCVPa4naA+G04scoy3lRjEpAlRtMJ1FRBOfutSYzmL7kXEcscYyXUS4niDJApbvJzzclDzeVYzjSG8GXraK6TzCy2YhWvVk84gw9nAcB9UYpO+SzUImRYjRFtsPxKmPVgbtOsyOE37eVniqNtRlS76M2a0PMPLW8Ui5VtSlRgYeUeozKUIGOzJ7l7Be1TiugxCuQ76M2f5syIrX8RRHCeVakWQ+H68W7HeKNA/49WMPDjzeVkjfJYwlYr9rCRPJYd8xjiNpHvLjny3Cdei05en+hWwWUW0UfWdZnqUYbameFbYfEB8+zalLjbUD1bPCcSCIJFoZVG1oD4ZxhOHtB3WlOXqfMdjhleDfrxviiU+neqTvUm4U0hdYO3L15YSsCBECZscJxVGM4zjs1g1nlwWTIkQsTlL6znL15ZT9ruXDpxlxFpBkAavvOzYPNY7j0FSaptJI3yWdhux+Hbj/9ozY/WrQbc/t9YYwkajG0Lxo/leU+rz7OOVlq5ifpKxXe7QyDMPA8mzCfwE3aoqkgkMfAAAAAElFTkSuQmCC";
const dirt_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR42nWSsQ1CMQxEvQ4rINFR0SOBxAgpaRgA/Q3YhelAF+mi9+/nF1YS2zn7zq7v+/H7tEu31/XYbea7nw6ruM/SRYlM0HtZluEzIO+KycporsI3qzGHeSW01tpwsJukkl0MAAcV0GdyJ6AKpa/cVlZyq9SG9yFicpR4TKDipOmzMjnH525m/g6QTp5uOT8zNt2D5J68SaVyPORsYPtJxVrVjBcraHSkwDH3TUxnguyZu1pRkD1v541wpjHb0MokKkz+WWgDkDtgkfbm7wJ/9oUoq3qXqFkAAAAASUVORK5CYII=";
const cobblestone_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVQ4y22S0Q2FMAwDMyMbMABvjcck3YD5QKl01WHxUVDcxElc1+847n3f7zHGPNu2zRjsuq75P//nxPpvrJzYQJ8m6diJ4JB04xdBB/33RBQaT5JiXICMjUPGOk1W/XECYxNDCM7hrvqiCVIHjwxmTZYGqbB390o0Md6E5WRYc2+vRQ53ZTbUzmJIrQnalYtTeU9Ed686Rcyi7EKhReUllgZO8J7e3S+CS5cGTk5N0okWeVk5PW8rf73My8p2Vlr3q9i+mSKmZb9I3DVf7AEDw33Q7E89pwAAAABJRU5ErkJggg==";
const oak_plank_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==";
const bedrock_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVQ4T4WS2w3FIAxDMwsrdBgGYCjGbeVKRgeL3vsRJQ3Bj5QaY9zXdW3Re7/nnLfOXCvz3LlUaFDhS8w6V3avtbaBvABuZu3LvuCwIgEW5VqyQDhI+Wm1zGimHHBtSyRbFiiP37R16r0ARLWvfz2rFUh9sZ/YaMvgRfT811/sjDoxUQ3ZuGADFh9RbpugZOXrLW44LaQ9kinWEikt5VJdxrZEZzWtisPcD1WsHaT8X1Y2BUR3ncsySL4H9R5CYf5qPXwY2QAAAABJRU5ErkJggg==";
const sand_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVQ4T32SMQ5CMQxDc34OwAW4ADOsbAyIgQVGkBgQZwA50qtMSP9QxU1Tx04bz8f+cz1tct1v24yXw3rgWY59CEAAVqTgvFslptH7dcycsHIBK4VeXFdtIBxIQpbLJTp2oiRgI2kz/8R6OWfQJVl+5go9H+4Zb1JT/TK4Oos/BUuvwt4bjhm4T+TyMi6/Wgtng8C7CiO/zmpYoKAbnF+g1s/DO81I6Oa1w4Inug8ji3oVz/0o6D5NtbT0oaIW0G12WeRO1CqouW5GxC8MukyobCbS7QAAAABJRU5ErkJggg=="
const observer_text = "data:image/png;base64,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"
const observer_face_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA1UlEQVQoz42SyxGDMAxE1QszzPiaISfIhUNaSAUuwi7CqSA1UEX6ytoLiowuvDEgL1pb/kjomXuCQ6DmnN+G3LBdFZEsMMUYXwZ080E8oL4byK0xO+zfWtLQCOOobXDYv/JYlue6oiFAu08Tmhf1Lfh8e7Zt0zcD5W9Q6eNQvZSCZOGk0YAuM7xeZ6AKtzSQiphjl4bq9NSSUkroYzcgsTxWQpvqSOsMdol2AdQR7wacBQ123Sz6tHqk1YOjQXfj5LQbhbR6NfBgsHSB/S75a8PA3ygGP3BANmiiyi9tAAAAAElFTkSuQmCC"
const log_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABItJREFUeJztmkuLG0cQx38SElo9afRAXtbaEDD2Jg4JGGMwji8hziH4HuJLvkAuAX+RgL9D8FeIryZ7MQ5OIMgQjCPZOGJ3lmH1mBWD2RzG1aqZ0e4m7GEyuAuE+lX9b7qrqqtrqvDjD18cA1QqFQD+HHlo2vPnAFy70rdt48nMlgf9BnnmL60qM4ZjH4CdgQFgOPZteTyJ+vcPDgHotlvEKZ/8hbu3Lx/LFDJYmJODpX/Pn3Pz022WyyWPnrwiz/wFUQGRhNNESsRJqGfqdnxe+UuPnrxiZ2BSE0F8wpMo7/yF+/duWBXQO9QzdXS7Nw3ZPzik225Z0QL4/LNt8swfU4FBv2F3cJ24CF3a7gCwXC5tW175C3dvXz4+aWe1WA3HPp1mOTWpGJu88lsVGPQbJ96lp/X9mzH/Z357Dcru9Ex9rS7pNtEnWF0xeeWPGUFN66yn9qDOorzwF+7fu3EsHtRpuyo69Pwvj267xZ3rF+2keea3KiBe0qXtTsq6ahKwJOWVP+UJahK98aZhCgjiYpZX/pQjpA3Et199nJr0JLC88he++/rqsXYSzqKkgwFxJyNv/EUxEFqcHj8bpeoQiYw3Dbl2pR8DHY59O/GeP7d1adN1LY6y+CzxS1KoVCrs+RM7cbKuSYuQNw35/pubsf4gXFAt1wjCBZ1Wk1uHUwCq5Vps3IOHu/RMtvgliK6P3d9GKSAhuVb021tIrppfng4BuNCOQKqmQeDP8OdHdqzPEYEfLf6Tjz60vFnil0TUtAfVbbdiLqNeqCxm0G+k9OnLW1cBWARvowbTBlYnIm0vXo7smKzxiwKoST8q5OUEcOWDDjsDY+9SEc8gXHChXWMRvMU7nBKEi9hPxki5ahq2nDV+EbCTSoRFFqQNhhigJHnTkGq5RtWsjNab1/u8eb2PPz/Cnx/ZupCIocyXJX7x6fNJatJOs8yeP2dnYFgul3antROhxwbhgsCf2V39+2DB5lYXU9/A1DfY3OquwOUUyjU6zTJZ4xelQ4udAOoAA6zu0OS7GiKxEj0TQyQnIP0CnFSBLPGtHwCRvp3mUsqi/guJuMl/spw1vrUB6Th72uUUHeyZOj/9/EesbR1p8ZMT0CevbUBW+FYFRN8g2vGeqVsPbN1ihEQc9a5CZIh+/X1kjZGQNlhalLPCL0H8C0qS9DW0f3D4LrQ0S52YtsKy65tba6ck8GeY+oatZ4lf1AASWYW4rmkdFAdFdl6uIbuQd+VquZb6dVrN2EK8aUjW+CVY3cNyCj1TZzyJdlkHF/Sui6XWYvzi5ci6oGeRXENZ45c0gL52Bv0Gj5+NGE9meNPQPlqGY5871y+mdHLTtMG0CcIFpr5hHyMAnVYT74QHSdb4JRKkTyKpZ9oNhZVoPni4GzsJbxqujcdJ387ArH3XZ4FfcPkBLj/A5Qe4/IA8f993+QEuP+B8/C4/wOUHuPwAlx/g8gMgv9/3z8vv8gNcfsB7nh/g4gEuHuDiAS4ekOv3vIsHuHjA+fhdPMDFA1w8wMUDXDwA8vuePy+/iwe4eMB7Hg/4B3HJBdQ8yb/xAAAAAElFTkSuQmCC";
const log_icon_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4y41TIQ4CMRDsazB4UAgsOSQGc8m94TQKj7ngCE/AovlYyTSZzXTbUsRkt9t2urPdDeNhHYfdKsLO503UNWO6Vh8ICLyXMcPrdjL7eUzJMqbA3QAWLC7TNuE+7xOe16NZBfdBnDJQAgSBVkYECGCNAAcYZLot4AwygZ/VAEESqAxNmwT0rQa8xFcgx7+s+1UJPgPGmC5tIaFHQL8mwWrQIlDwVd0vauCLyL5QKX9J6H1jIUG/sdY4BJuskEACbeEesm/0bavD9GugjMCPaG+cOfbAF9SuWTg3yVMfAAAAAElFTkSuQmCC";
const red_mushroom_text = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVQ4y41TQQ7DIAzzV6ZJ0yq0//Y17WGnXfolWpCC3ODADpEAY0OcBN/3K2/PR4uy/6WlRlkzzpjhYNAuq4uG+TMw+fikGkxWwYJgct73nNe1rv0vlEgvcJGLiAlw/v5124MBS0H5EZndBNiL6LvqEXh3Z2T2qXkwc3rkE0YGKdEuBeXBPyVsVVAE31gjYShi1FhqJhANjTLMV+bWiUxWNY+q1E2jEvTBIifo3iNCLboGdQAAAABJRU5ErkJggg==";


const cloud_text = "data:image/png;base64,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"