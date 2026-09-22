"use client";

import {
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconMail,
  IconSend,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length >= 2 ? null : "Please enter at least 2 characters.",
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Please enter a valid email address.",
      message: (value) =>
        value.trim().length >= 20
          ? null
          : "Tell me a little more — at least 20 characters.",
    },
  });

  const handleSubmit = form.onSubmit(() => {
    // Template behavior only. Connect this handler to your email/API before production.
    notifications.show({
      title: "Form validation works",
      message:
        "This template does not send email yet. Connect this submit handler to your API or email service before launch.",
      icon: <IconCheck aria-hidden size={18} stroke={2} />,
      classNames: {
        root: "portfolio-notification",
        icon: "portfolio-notification-icon",
        title: "portfolio-notification-title",
        description: "portfolio-notification-description",
        closeButton: "portfolio-notification-close",
      },
    });

    form.reset();
  });

  return (
    <section className="section-shell section-shell-soft" id="contact">
      <Container>
        <Stack gap={48}>
          <SectionHeading
            eyebrow="Contact"
            title="Make the next step easy."
            description="The form is already wired for client-side validation and notifications. Replace the demo submit handler with your real email/API integration before production."
          />

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
            <Stack gap="xl">
              <Stack gap="sm">
                <Title className="contact-title" order={3}>
                  Prefer a direct channel?
                </Title>
                <Text className="body-copy">
                  Keep these links updated in src/config/site.ts so recruiters and
                  clients always have a simple way to reach you.
                </Text>
              </Stack>

              <Group gap="sm">
                <Button
                  href={siteConfig.links.email}
                  leftSection={<IconMail aria-hidden size={18} stroke={1.8} />}
                >
                  Email
                </Button>
                <Button
                  href={siteConfig.links.github}
                  leftSection={<IconBrandGithub aria-hidden size={18} stroke={1.8} />}
                  variant="secondary"
                >
                  GitHub
                </Button>
                <Button
                  href={siteConfig.links.linkedin}
                  leftSection={<IconBrandLinkedin aria-hidden size={18} stroke={1.8} />}
                  variant="secondary"
                >
                  LinkedIn
                </Button>
              </Group>
            </Stack>

            <form className="contact-form" onSubmit={handleSubmit}>
              <Stack gap="md">
                <TextInput
                  key={form.key("name")}
                  label="Name"
                  placeholder="Your name"
                  required
                  {...form.getInputProps("name")}
                />

                <TextInput
                  key={form.key("email")}
                  label="Email"
                  placeholder="you@example.com"
                  required
                  type="email"
                  {...form.getInputProps("email")}
                />

                <Textarea
                  key={form.key("message")}
                  autosize
                  label="Message"
                  minRows={5}
                  placeholder="Tell me about the role, project, or problem you want to discuss."
                  required
                  {...form.getInputProps("message")}
                />

                <div>
                  <Button
                    rightSection={<IconSend aria-hidden size={18} stroke={1.8} />}
                    type="submit"
                  >
                    Send message
                  </Button>
                </div>

                <Text className="form-helper" size="xs">
                  Template note: this currently validates and shows a notification;
                  it intentionally does not send data anywhere yet.
                </Text>
              </Stack>
            </form>
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
