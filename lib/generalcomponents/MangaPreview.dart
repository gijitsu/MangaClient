import 'package:flutter/material.dart';
import 'dart:math';
import '../MangaSummary.dart';
import '../ReviewSpecPage.dart';

/// These imports only work on web and will be ignored on other platforms
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart' show kIsWeb;

class MangaPreview extends StatefulWidget {
  MangaPreview({
    super.key,
    required this.title,
    required this.totalNumberOfCharacters,
    required this.numberOfCharactersPerLine,
    required this.boxHeight,
    required this.boxWidth,
    required this.coverHeight,
    required this.coverWidth,
    required this.id,
    required this.coverfilename,
    required this.tags,
    required this.description,
    required this.userData,
    required this.types,
  });

  String title;
  int totalNumberOfCharacters;
  int numberOfCharactersPerLine;
  double boxHeight;
  double boxWidth;
  double coverHeight;
  double coverWidth;
  String id;
  String coverfilename;
  String tags;
  String description;
  String types;
  dynamic userData;

  @override
  State<MangaPreview> createState() => _MangaPreviewState();
}

class _MangaPreviewState extends State<MangaPreview> {
  late final String viewType;
  late final String coverUrl;

  @override
  void initState() {
    super.initState();
    coverUrl =
        'https://proxy.bertmpngn.workers.dev/covers/${widget.id}/${widget.coverfilename}';
    viewType = 'cover-${widget.id}-${widget.coverfilename}';

    // This prevents multiple registrations in hot reload
    // ignore: undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory(viewType, (int viewId) {
      final img = html.ImageElement()
        ..src = coverUrl
        ..style.borderRadius = '16px'
        ..style.objectFit = 'cover'
        ..width = widget.coverWidth.toInt()
        ..height = widget.coverHeight.toInt();
      return img;
    });
  }

  @override
  Widget build(BuildContext context) {
    int sz = widget.title.length;
    String lessenedTitle =
        widget.title.substring(0, min(widget.totalNumberOfCharacters, sz));
    var actualTitle = '';
    for (int i = 0;
        i < lessenedTitle.length;
        i += widget.numberOfCharactersPerLine) {
      actualTitle += lessenedTitle.substring(
            i,
            min(i + widget.numberOfCharactersPerLine, lessenedTitle.length),
          ) +
          "\n";
    }

    return InkWell(
      onTap: () {
        if (widget.types == 'Review') {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => PageReview(
                id: widget.id,
                title: widget.title,
                tags: widget.tags,
                description: widget.description,
                coverArt: coverUrl,
                userData: widget.userData,
              ),
            ),
          );
        } else {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => MangaSummary(
                id: widget.id,
                title: widget.title,
                tags: widget.tags,
                description: widget.description,
                coverArt: coverUrl,
                userData: widget.userData,
              ),
            ),
          );
        }
      },
      child: SizedBox(
        height: widget.boxHeight,
        width: widget.boxWidth,
        child: Column(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(16.0),
              child: SizedBox(
                height: widget.coverHeight,
                width: widget.coverWidth,
                child: HtmlElementView(viewType: viewType),
              ),
            ),
            Flexible(
              child: Container(
                margin: const EdgeInsets.only(right: 5),
                height: 100,
                child: SingleChildScrollView(
                  child: Text(
                    actualTitle,
                    textAlign: TextAlign.justify,
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 13,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
