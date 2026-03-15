import express from 'express';

const router = express.Router();

router.post('/api/contact', async (req, res) => {
  const { name, email, phone, description } = req.body;

  // Validate required fields
  if (!name || !email || !description) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Call Linear API to create an issue
  try {
    const mutation = `
      mutation IssueCreate {
        issueCreate(
          input: {
            teamId: "${process.env.LINEAR_TEAM_ID}"
            title: "New Contact — ${name}"
            description: "Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nProject description:\n${description}"
          }
        ) {
          success
        }
      }
    `;

    const response = await fetch('https://api.linear.app/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LINEAR_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: mutation })
    });

    if (!response.ok) {
      console.error('Linear API error:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating Linear issue:', error);
  }

  // Always return success
  res.status(200).json({ success: true });
});

export default router;
