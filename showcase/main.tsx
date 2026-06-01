import { StrictMode, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Bell, Camera, Check, ChevronDown, Search, ShieldAlert } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
  EmptyState,
  Input,
  Logo,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../src/index";

import "./showcase.css";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
        {title}
      </h2>
      <div className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-background)] p-5">
        {children}
      </div>
    </section>
  );
}

function ToastDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Toast харуулах
      </Button>
      <Toast open={open} onOpenChange={setOpen} tone="success" duration={3000}>
        <div className="flex flex-col gap-1">
          <ToastTitle>Хадгалагдлаа</ToastTitle>
          <ToastDescription>Дүгнэлт амжилттай хадгалагдсан.</ToastDescription>
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-muted)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-5">
          <Logo className="h-8 w-8" />
          <div>
            <h1 className="text-lg font-semibold">Chipmo Sentry — UI Kit</h1>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              @chipmo-sentry/ui-kit · 12 component · Tailwind v4 + Radix
            </p>
          </div>
          <Badge tone="success" className="ml-auto">
            <Check className="h-3 w-3" /> v0.1.0
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        {/* Buttons */}
        <Section title="Button">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
            <Button>
              <Camera className="h-4 w-4" /> Icon
            </Button>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badge — alert levels & tones">
          <div className="flex flex-wrap gap-2">
            <Badge tone="ignore">Үл хамаа</Badge>
            <Badge tone="log">Бүртгэсэн</Badge>
            <Badge tone="notify">Анхаар</Badge>
            <Badge tone="review">Шалга</Badge>
            <Badge tone="success">Success</Badge>
            <Badge tone="warning">Warning</Badge>
            <Badge tone="neutral">Neutral</Badge>
          </div>
        </Section>

        {/* Inputs */}
        <Section title="Input">
          <div className="grid max-w-md gap-3">
            <Input placeholder="И-мэйл хаяг" />
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted-foreground)]" />
              <Input className="pl-9" placeholder="Хайх…" />
            </div>
            <Input disabled placeholder="Идэвхгүй" />
          </div>
        </Section>

        {/* Card */}
        <Section title="Card">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardDescription>Нийт event</CardDescription>
                <CardTitle className="text-3xl">128</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  Сүүлийн 200 event
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>А</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">admin@chipmo.mn</CardTitle>
                    <CardDescription>Супер админ</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </Section>

        {/* Overlays */}
        <Section title="Modal · Dropdown · Toast · Spinner">
          <div className="flex flex-wrap items-center gap-3">
            <Modal>
              <ModalTrigger asChild>
                <Button>Modal нээх</Button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Камер устгах уу?</ModalTitle>
                  <ModalDescription>
                    Энэ үйлдлийг буцаах боломжгүй.
                  </ModalDescription>
                </ModalHeader>
                <ModalFooter>
                  <ModalClose asChild>
                    <Button variant="ghost">Болих</Button>
                  </ModalClose>
                  <ModalClose asChild>
                    <Button variant="danger">Устгах</Button>
                  </ModalClose>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Dropdown>
              <DropdownTrigger asChild>
                <Button variant="outline">
                  Цэс <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownTrigger>
              <DropdownContent align="start">
                <DropdownLabel>Үйлдэл</DropdownLabel>
                <DropdownSeparator />
                <DropdownItem>Засах</DropdownItem>
                <DropdownItem>Хувилах</DropdownItem>
                <DropdownItem>Устгах</DropdownItem>
              </DropdownContent>
            </Dropdown>

            <ToastDemo />

            <span className="inline-flex items-center gap-2">
              <Spinner /> <span className="text-sm">Уншиж байна…</span>
            </span>
          </div>
        </Section>

        {/* Table */}
        <Section title="Table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Камер</TableHead>
                <TableHead>Дэлгүүр</TableHead>
                <TableHead>Төлөв</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Касс 1</TableCell>
                <TableCell>Төв салбар</TableCell>
                <TableCell>
                  <Badge tone="success">Идэвхтэй</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Орц</TableCell>
                <TableCell>Төв салбар</TableCell>
                <TableCell>
                  <Badge tone="neutral">Унтраалттай</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        {/* EmptyState */}
        <Section title="EmptyState">
          <EmptyState
            icon={Bell}
            title="Одоогоор үр дүн байхгүй"
            description="Видео илгээгээд AI-аас тайлан хүлээнэ."
            action={<Button>Видео илгээх</Button>}
          />
        </Section>

        <footer className="flex items-center gap-2 pt-4 text-xs text-[var(--color-muted-foreground)]">
          <ShieldAlert className="h-3.5 w-3.5" />
          Chipmo Sentry design system · Apache 2.0
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
