"use client";

/*
 * This is a Client Component because:
 * - useForm manages form state in the browser
 * - notifications.show runs after the user submits the form
 */
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

function validateName(value: string) {
  if (value.trim().length < 2) {
    return "Please enter at least 2 characters.";
  }

  return null;
}

function validateEmail(value: string) {
  const emailPattern = /^\S+@\S+\.\S+$/;

  if (!emailPattern.test(value)) {
    return "Please enter a valid email address.";
  }

  return null;
}

function validateMessage(value: string) {
  if (value.trim().length < 20) {
    return "Tell me a little more — at least 20 characters.";
  }

  return null;
}

export function ContactSection() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: validateName,
      email: validateEmail,
      message: validateMessage,
    },
  });

  const handleSubmit = form.onSubmit(() => {
    // This is still demo behavior.
    // Later, connect this function to an API/email service.
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
    <section
      className="scroll-mt-20 bg-[var(--surface-soft)] py-24 md:py-[7.5rem]"
      id="contact"
    >
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
                <Title
                  className="font-extrabold tracking-[-0.025em] text-[var(--text)]"
                  order={3}
                >
                  Prefer a direct channel?
                </Title>

                <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
                  Keep these links updated in src/config/site.ts so recruiters
                  and clients always have a simple way to reach you.
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
                  leftSection={
                    <IconBrandGithub aria-hidden size={18} stroke={1.8} />
                  }
                  variant="secondary"
                >
                  GitHub
                </Button>

                <Button
                  href={siteConfig.links.linkedin}
                  leftSection={
                    <IconBrandLinkedin aria-hidden size={18} stroke={1.8} />
                  }
                  variant="secondary"
                >
                  LinkedIn
                </Button>
              </Group>
            </Stack>

            <form
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-[clamp(1.25rem,3vw,2rem)]"
              onSubmit={handleSubmit}
            >
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

                <Text
                  className="leading-[1.6] text-[var(--muted)]"
                  size="xs"
                >
                  Template note: this currently validates and shows a
                  notification; it intentionally does not send data anywhere
                  yet.
                </Text>
              </Stack>
            </form>
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
