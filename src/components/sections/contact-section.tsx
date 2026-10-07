"use client";

import { Group, SimpleGrid, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconAlertCircle, IconBrandGithub, IconCheck, IconMail, IconSend } from "@tabler/icons-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const notificationClassNames = {
  root: "portfolio-notification",
  icon: "portfolio-notification-icon",
  title: "portfolio-notification-title",
  description: "portfolio-notification-description",
  closeButton: "portfolio-notification-close",
};

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length >= 2 ? null : "Please enter at least 2 characters."),
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : "Please enter a valid email address."),
      message: (value) => (value.trim().length >= 20 ? null : "Tell me a little more — at least 20 characters."),
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    if (!FORMSPREE_ID) {
      notifications.show({
        title: "Form is not configured",
        message: `Please email me directly at ${siteConfig.email}.`,
        color: "red",
        icon: <IconAlertCircle aria-hidden size={18} stroke={2} />,
        classNames: notificationClassNames,
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      notifications.show({
        title: "Message sent",
        message: "Thank you for reaching out. I'll get back to you soon.",
        icon: <IconCheck aria-hidden size={18} stroke={2} />,
        classNames: notificationClassNames,
      });

      form.reset();
    } catch {
      notifications.show({
        title: "Message could not be sent",
        message: `Something went wrong. Please email me directly at ${siteConfig.email}.`,
        color: "red",
        icon: <IconAlertCircle aria-hidden size={18} stroke={2} />,
        classNames: notificationClassNames,
      });
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <section className="section-shell section-shell-soft" id="contact">
      <Container>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 64 }}>
          {/* Kiri: teks & kontak langsung */}
          <Stack gap={40} className="contact-info">
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about an opportunity."
              description="I'm based in Surabaya and open to on-site or remote opportunities. The best way to reach me is by email, and you can also explore my projects and development history on GitHub."
            />

            <Stack gap="sm">
              <Title className="contact-title" order={3}>
                Prefer a direct channel?
              </Title>
              <Text className="body-copy">Feel free to reach out about internship opportunities, junior developer roles, or development projects.</Text>
            </Stack>

            <Group gap="sm">
              <Button href={siteConfig.links.email} leftSection={<IconMail aria-hidden size={18} stroke={1.8} />}>
                Email
              </Button>
              <Button href={siteConfig.links.github} leftSection={<IconBrandGithub aria-hidden size={18} stroke={1.8} />} variant="secondary">
                GitHub
              </Button>
            </Group>
          </Stack>

          {/* Kanan: form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <Stack gap="md">
              <TextInput key={form.key("name")} label="Name" placeholder="Your name" required {...form.getInputProps("name")} />

              <TextInput key={form.key("email")} label="Email" placeholder="you@example.com" required type="email" {...form.getInputProps("email")} />

              <Textarea
                key={form.key("message")}
                autosize
                label="Message"
                minRows={5}
                placeholder="Tell me about the role, team, or project you would like to discuss."
                required
                {...form.getInputProps("message")}
              />

              <div>
                <Button disabled={submitting} rightSection={<IconSend aria-hidden size={18} stroke={1.8} />} type="submit">
                  {submitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </Stack>
          </form>
        </SimpleGrid>
      </Container>
    </section>
  );
}
