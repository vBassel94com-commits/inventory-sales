package com.example.inventorysales.controller;

import com.example.inventorysales.entity.Invoice;
import com.example.inventorysales.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*; // لاستيراد جميع تعليقات الويب (@RestController، @RequestMapping، إلخ)
import java.time.LocalDate; // لمعالجة التواريخ

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @PostMapping
    public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice) {
        System.out.println("Received request to create invoice: " + invoice);
        Invoice createdInvoice = invoiceService.createInvoice(invoice);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInvoice);
    }

    @GetMapping("/by-date")
    public ResponseEntity<List<Invoice>> getInvoicesByDateRange(
            @RequestParam String startDate,
            @RequestParam String endDate) {

        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);

        List<Invoice> invoices = invoiceService.getInvoicesByDateRange(start, end);
        return ResponseEntity.ok(invoices);
    }
}