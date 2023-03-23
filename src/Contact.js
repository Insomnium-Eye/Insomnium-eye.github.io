import React from 'react';

function Contact(){
    const styles = {
        border: "none",
        maxWidth: "100%",
        maxHeight: "100vh"
    }

    return(
        <div>
            <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__r2tgE9URUNSTFFPQzlNWVNHT1FCQjlGT0NTS0NFUy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={styles} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div>
    )
}

export default Contact;
