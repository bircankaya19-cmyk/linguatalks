<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LinguaTalks Contact</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f4f4f4;
    }
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      max-width: 400px;
      margin: auto;
    }
    label {
      display: block;
      margin-top: 10px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      margin-top: 12px;
      padding: 10px;
      width: 100%;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <h2>Contact Us</h2>
  <form id="contactForm" class="card">
    <label>Name
      <input name="name" required placeholder="Your name" />
    </label>
    <label>Email
      <input type="email" name="email" required placeholder="Your email" />
    </label>
    <label>Country / Time zone
      <input name="country" placeholder="Country / Time zone" />
    </label>
    <label>Your goals
      <textarea name="goals" placeholder="e.g., General English, Business, IELTS"></textarea>
    </label>
    <button type="submit">Send</button>
  </form>

  <script>
    document.getElementById("contactForm").addEventListener("submit", async function(e) {
      e.preventDefault();

      const formData = {
        name: this.name.value,
        email: this.email.value,
        country: this.country.value,
        goals: this.goals.value
      };

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          alert("✅ Your message has been sent!");
          this.reset();
        } else {
          alert("⚠️ Something went wrong, please try again.");
        }
      } catch (err) {
        alert("❌ Error sending message.");
      }
    });
  </script>
</body>
</html>
