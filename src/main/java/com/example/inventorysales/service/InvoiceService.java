package com.example.inventorysales.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import com.example.inventorysales.entity.Customer;
import com.example.inventorysales.entity.Invoice;
import com.example.inventorysales.entity.InvoiceItem;
import com.example.inventorysales.entity.Item;
import com.example.inventorysales.repository.CustomerRepository;
import com.example.inventorysales.repository.InvoiceRepository;
import com.example.inventorysales.repository.ItemRepository;


@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public Invoice createInvoice(Invoice invoice) {
        // التحقق من العميل
        Customer customer = customerRepository.findById(invoice.getCustomer().getId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        double total = 0.0;
        for (InvoiceItem invoiceItem : invoice.getInvoiceItems()) {
            // التحقق من المنتج
            Item item = itemRepository.findById(invoiceItem.getItem().getId())
                    .orElseThrow(() -> new RuntimeException("Item not found"));

            // التحقق من الكمية
            if (item.getQuantity() < invoiceItem.getQuantity()) {
                throw new RuntimeException("Insufficient stock for item: " + item.getName());
            }

            // تقليل الكمية
            item.setQuantity(item.getQuantity() - invoiceItem.getQuantity());
            itemRepository.save(item);

            // حساب المجموع
            double itemTotal = invoiceItem.getQuantity() * invoiceItem.getUnitPrice();
            itemTotal -= itemTotal * (invoiceItem.getDiscount() / 100); // تطبيق الخصم
            itemTotal += itemTotal * (invoiceItem.getTax() / 100); // تطبيق الضريبة
            total += itemTotal;
        }

        invoice.setTotalAmount(total);
        return invoiceRepository.save(invoice);
    }

    public List<Invoice> getInvoicesByDateRange(LocalDate startDate, LocalDate endDate) {
        return invoiceRepository.findByInvoiceDateBetween(startDate, endDate);
    }
}