// rendering footer with current year in copyright

function Footer() {
    
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright © {year}</p>
            <p>Terms and Condition</p>
            <p>By accessing or using the [Your Book Review Application], you agree to comply with and be bound by these User Terms and Conditions.
            Users may submit book reviews, comments, and other content related to books. Submitted content must be accurate, relevant, and respectful.
            Users are prohibited from submitting content that violates intellectual property rights, contains hate speech, or is otherwise unlawful.
            Users must conduct themselves in a respectful and constructive manner within the application.Harassment, abuse, or any form of disruptive behavior is strictly prohibited.
            These terms and conditions are governed by the laws of [Your Jurisdiction].</p>

        </footer>
    );
}

export default Footer;